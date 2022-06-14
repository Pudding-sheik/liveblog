import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'Mindlessly') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">note</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Blog</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT 
 @@           @@          @@        @@       <a href="mailto:${config.email}" target="_blank">${config.email}</a>
  @@           @@        @@        @@        <u><a href="tencent://message/?uin=${config.social.QQ}&Site=&Menu=yes" target="_blank">QQ→${config.social.QQ}</a></u>
   @@             @@@@@@          @@         <u><a href="https://weibo.com/u/${config.social.weibo}" target="_blank">weibo→Mindlessly</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@          DONATE 
         @|  @@@@@@@@@@@@@@@@   @@           <u><a href="https://www.cydf.org.cn/#/" target="_blank">${config.donate_urls.paypal}</a></u>
         @|                      @@          <u><a href="https://www.cgf.org.cn/cgforgcn/gyxm/index.html" target="_blank">${config.donate_urls.patreon}</a></u>

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > L I V E T E R M        ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="tencent://message/?uin=${config.social.QQ}&Site=&Menu=yes" target="_blank">QQ→${config.social.QQ}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://weibo.com/u/${config.social.weibo}" target="_blank">weibo→Mindlessly</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             DONATE 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="${config.donate_urls.paypal}" target="_blank">pay${config.donate_urls.paypal}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   <u><a href="${config.donate_urls.patreon}" target="_blank">dolar${config.donate_urls.patreon}</a></u>

`;
  }
};

export default sumfetch;



// @@           @@        @@        @@        <u><a href="tencent://message/?uin=${config.social.QQ}&Site=&Menu=yes" target="_blank">QQ→${config.social.QQ}</a></u>
// @@             @@@@@@          @@         <u><a href="https://weibo.com/u/${config.social.weibo}" target="_blank">weibo→Mindlessly</a></u>


// @@@                  @@@ @@         DONATE 
// @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
// @|                      @@          <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>
