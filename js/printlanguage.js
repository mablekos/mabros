import * as links from "../config/links.json";

export const printLanguage = () => {
  const languagePrint = [];

  links.foreach((link) => {
    languagePrint = [
      ...languagePrint,
      `
      <tr>
      <td>
        <div class="flagcontainer">
          <div><img class="flags" src="${link.icon}"/></div>
          <div>${link.language}</div>
        </div>
      </td>
      <td>
        <table>
          <tr>
            <td>Print</td>
            ${link.print.map(
              (printlink) =>
                `<td>
              <a href="${printlink.url}" target="_blank">
              <img class="imagelogo" src="${printlink.image}"/>
              </a>
            </td>`
            )}
          </tr>
          <tr>
            <td>Ebook</td>
            ${link.ebook.map(
              (ebooklink) =>
                `<td>
              <a href="${ebooklink.url}" target="_blank">
              <img class="imagelogo" src="${ebooklink.image}"/>
              </a>
            </td>`
            )}
          </tr>
        </table>
      </td>
    </tr>
    `,
    ];
  });

  return languagePrint;
};
