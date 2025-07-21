window.addEventListener("load", function () {
  CookieConsent.run({
    guiOptions: {
      consentModal: {
        layout: "box",
        position: "bottom left",
        equalWeightButtons: true,
        flipButtons: false
      },
      preferencesModal: {
        layout: "box",
        position: "right",
        equalWeightButtons: true,
        flipButtons: false
      }
    },

    categories: {
      necessary: { readOnly: true },
      functionality: {},
      analytics: {},
      marketing: {}
    },

    language: {
      default: "en",
      autoDetect: "browser",
      translations: {
        en: {
          consentModal: {
            title: "Hello visitor, it's cookie time!",
            description: "We use cookies to improve your experience and analyse our traffic.",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            showPreferencesBtn: "Manage preferences",
            footer: "<a href='/privacy'>Privacy Policy</a>"
          },
          preferencesModal: {
            title: "Consent Preferences",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            savePreferencesBtn: "Save settings",
            sections: [
              {
                title: "Necessary Cookies <span class='pm__badge'>Always enabled</span>",
                description: "Required for basic website functionality.",
                linkedCategory: "necessary"
              },
              {
                title: "Analytics Cookies",
                description: "Help us improve the website by collecting usage data.",
                linkedCategory: "analytics"
              },
              {
                title: "Functionality Cookies",
                description: "Enable advanced features like remembering preferences.",
                linkedCategory: "functionality"
              },
              {
                title: "Marketing Cookies",
                description: "Used for personalized advertisements.",
                linkedCategory: "marketing"
              }
            ]
          }
        }
      }
    },

    // CALLBACKY PRO SOUHLAS
    onFirstConsent: handleConsentUpdate,
    onChange: handleConsentUpdate
  });

  function handleConsentUpdate({ cookie }) {
    const analytics     = !!cookie.categories.analytics;
    const marketing     = !!cookie.categories.marketing;
    const functionality = !!cookie.categories.functionality;

    // Google Consent Mode update
    gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: marketing ? 'granted' : 'denied',
      functionality_storage: functionality ? 'granted' : 'denied'
    });

    // GTM dataLayer push
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cookie_consent_update',
      analytics,
      marketing,
      functionality,
      timestamp: Date.now()
    });
  }
});
