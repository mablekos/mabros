const languages = [
  {
    language: "English",
    icon: "img/flags/united-kingdom.svg",
    medium: {
      print: [
        {
          service: "Amazon",
          image: "img/amazon_books.png",
          url:
            "https://www.amazon.co.uk/dp/183831220X/ref=cm_sw_em_r_mt_dp_825M3VTGZEBD58WMP49N",
        },
      ],
      ebook: [
        {
          service: "Amazon Kindle",
          image: "img/amazon_kindle.png",
          url: "https://www.amazon.co.uk/dp/B08VN9PLV4",
        },
        {
          service: "Amazon Books",
          image: "img/apple_books.png",
          url:
            "https://books.apple.com/gb/book/max-the-colourful-dragon/id1552584750",
        },
        {
          service: "Google Play Books",
          image: "img/google_play.png",
          url: "https://play.google.com/store/books/details?id=KakaEAAAQBAJ",
        },
      ],
    },
  },
  {
    language: "Greek",
    icon: "img/flags/greece.svg",
    medium: {
      print: [],
      ebook: [],
    },
  },
  {
    language: "German",
    icon: "img/flags/germany.svg",
    medium: {
      print: [],
      ebook: [],
    },
  },
  {
    language: "Polish",
    icon: "img/flags/republic-of-poland.svg",
    medium: {
      print: [],
      ebook: [],
    },
  },
  {
    language: "French",
    icon: "img/flags/france.svg",
    medium: {
      print: [],
      ebook: [],
    },
  },
  {
    language: "Spanish",
    icon: "img/flags/spain.svg",
    medium: {
      print: [],
      ebook: [],
    },
  },
  {
    language: "Italian",
    icon: "img/flags/italy.svg",
    medium: {
      print: [],
      ebook: [],
    },
  },
  {
    language: "Arabic",
    icon: "img/flags/algeria.svg",
    medium: {
      print: [],
      ebook: [],
    },
  },
];

function printLanguage() {
  const languagePrint = [];
  const notifymeUrl = "http://eepurl.com/hoK8Jb";

  languages.forEach((link) => {
    const printMedium =
      link?.medium?.print.length > 0
        ? link.medium.print
            .map((printlink) => {
              if (printlink.url) {
                return `<td>
            <a href="${printlink.url}" target="_blank">
            <img class="imagelogo" src="${printlink.image}"/>
            </a>
          </td>`;
              }
            })
            .join(" ")
        : `<td>
      <a href="${notifymeUrl}" target="_blank">
          <img class="imagelogo" src="img/notifyme.png"/>
          </a>
        </td>`;

    console.log({ link, printMedium });

    const ebookMedium =
      link?.medium?.ebook.length > 0
        ? link?.medium?.ebook
            .map((ebooklink) => {
              if (ebooklink.url) {
                return `<td>
            <a href="${ebooklink.url}" target="_blank">
            <img class="imagelogo" src="${ebooklink.image}"/>
            </a>
          </td>`;
              }
            })
            .join(" ")
        : `<td>
      <a href="${notifymeUrl}" target="_blank">
        <img class="imagelogo" src="img/notifyme.png"/>
        </a>
      </td>`;

    languagePrint.push(
      `
      <tr class="languageBlock">
      <td class="flagcontainercell">
        <div class="flagcontainer">
          <div><img class="flags" src="${link.icon}"/></div>
          <div>${link.language}</div>
        </div>
      </td>
      <td>
        <table>
          <tr>
            <td><svg width="2rem" id="print" data-name="print-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><style>.cls-1{fill:#2d3e50;}.cls-2{fill:#2e79bd;}</style></defs><title>b</title><path class="cls-1" d="M112.38947,15.74863a3.65124,3.65124,0,0,0-3.65125,3.65259l.033,91.07263a6.96352,6.96352,0,0,1-6.95709,6.96021H25.861a6.61359,6.61359,0,0,1-1.7713-12.9895,6.75274,6.75274,0,0,1,1.90564-.27179H93.798a9.29266,9.29266,0,0,0,9.29382-9.29071l.0094-84.491A7.09376,7.09376,0,0,0,96.00671,3.2933H19.30682A7.09619,7.09619,0,0,0,12.21228,10.391v97.78979a13.765,13.765,0,0,0,0,5.25452A13.92138,13.92138,0,0,0,25.861,124.7067h75.95319a14.24532,14.24532,0,0,0,14.09851-12.32727,13.71893,13.71893,0,0,0,.12811-1.90558v-91.074A3.65128,3.65128,0,0,0,112.38947,15.74863ZM32.40253,37.2822a2.07524,2.07524,0,0,1,2.07434-2.07434H80.09a2.07524,2.07524,0,0,1,2.07434,2.07434V70.45572A2.07319,2.07319,0,0,1,80.09,72.53H34.47687a2.07319,2.07319,0,0,1-2.07434-2.07428Z"/><path class="cls-2" d="M46.91681,51.04605H59.35626a1.32422,1.32422,0,0,0,0-2.64844H46.91681a1.32422,1.32422,0,0,0,0,2.64844Z"/><path class="cls-2" d="M46.91681,59.34048h20.7334a1.32446,1.32446,0,0,0,0-2.64893H46.91681a1.32446,1.32446,0,0,0,0,2.64893Z"/></svg></td>
            ${printMedium}
          </tr>
          <tr>
            <td><svg width="2rem" id="tablet" data-name="tablet-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><style>.cls-1{fill:#2d3e50;}</style></defs><title>x</title><path class="cls-1" d="M107.33966,6.28426a13.541,13.541,0,0,0-9.9268-4.12811H30.58715a13.541,13.541,0,0,0-9.9268,4.12811,13.54241,13.54241,0,0,0-4.12811,9.92886v95.57775a13.53376,13.53376,0,0,0,4.12811,9.925,13.53289,13.53289,0,0,0,9.9268,4.128H97.41285a14.09425,14.09425,0,0,0,14.05491-14.053V16.21313A13.54241,13.54241,0,0,0,107.33966,6.28426ZM67.95527,120.27881a5.51456,5.51456,0,1,1,1.66876-3.95127A5.41024,5.41024,0,0,1,67.95527,120.27881Zm35.02663-19.73392a5.60756,5.60756,0,0,1-5.569,5.57121H30.58715a5.60756,5.60756,0,0,1-5.569-5.57121V16.21313a5.60417,5.60417,0,0,1,5.569-5.5711H97.41285a5.60417,5.60417,0,0,1,5.569,5.5711Z"/></svg></td>
            ${ebookMedium}
          </tr>
        </table>
      </td>
    </tr>
    `
    );
  });

  console.log({ languagePrint });

  return languagePrint.join(" ");
}
