/**
 * Dynamic Phone Number Insertion
 *
 * Maps traffic sources to phone numbers.
 * The Wix page itself should always contain the default phone number
 * so a working number remains visible even if JavaScript fails.
 */

const DEFAULT_PHONE = {
  display: "(555) 123-4567",
  tel: "+15551234567"
};

const PHONE_NUMBERS = {
  yelp: {
    display: "(555) 111-2222",
    tel: "+15551112222"
  }
};

 google_search: {
    display: "(555) 222-3333",
    tel: "+15552223333"
  },

  nextdoor: {
    display: "(555) 333-4444",
    tel: "+15553334444"
  },

  instagram: {
    display: "(555) 444-5555",
    tel: "+15554445555"
  },

  facebook: {
    display: "(555) 555-6666",
    tel: "+15555556666"
  },

  pinterest: {
    display: "(555) 666-7777",
    tel: "+15556667777"
  }
};

const SOURCE_MAP = {
  yelp: "yelp",
  google_search: "google_search",
  nextdoor: "nextdoor",
  instagram: "instagram",
  facebook: "facebook",
  pinterest: "pinterest"
};

const SOURCE_STORAGE_KEY = "phone_tracking_source";

// Reads the traffic source from the URL.
// Example URL: https://www.example.com/?utm_source=yelp
// In this example, "yelp" is the referring source.
function getSourceFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source");

  return source ? source.trim().toLowerCase() : null;
}

// Stores the detected traffic source for the current browser session.
function rememberSource(source) {
  if (source) {
    sessionStorage.setItem(SOURCE_STORAGE_KEY, source);
  }
}

// Retrieves the previously stored traffic source from the current browser session.
function getRememberedSource() {
  return sessionStorage.getItem(SOURCE_STORAGE_KEY);
}

// Uses the URL source when available, otherwise falls back to the remembered source.
function getActiveSource() {
  const urlSource = getSourceFromUrl();

  if (urlSource) {
    rememberSource(urlSource);
    return urlSource;
  }

  return getRememberedSource();
}
