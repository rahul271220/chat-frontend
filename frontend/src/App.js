import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Login from './pages/login';
import ProtectedRoute from './pages/protectedroutes';
import Dashboard from './pages/dashboard';
import NotFound from './pages/notfound';
import Autocomplete from './pages/autocomplete';
import { useState } from 'react';
import Progressbar  from './pages/progressbar'

const App = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/');
  }
  const [selectedValue, setSelectedValue] = useState("");
  function handleSelect(value) {
    console.log(value);
    console.log(selectedValue);
    setSelectedValue(value);
    
  }
  const countryList = [
    {
      id: 1,
      country: "India",
      country_code: 91,
      flag_url: "images/countryflags/in.png",
      iso_code: "IN",
    },
    {
      id: 4,
      country: "Indonesia",
      country_code: 62,
      flag_url: "images/countryflags/id.png",
      iso_code: "ID",
    },
    {
      id: 5,
      country: "Philippines",
      country_code: 63,
      flag_url: "images/countryflags/ph.png",
      iso_code: "PH",
    },
    {
      id: 2,
      country: "Malaysia",
      country_code: 60,
      flag_url: "images/countryflags/my.png",
      iso_code: "MY",
    },
    {
      id: 6,
      country: "Thailand",
      country_code: 66,
      flag_url: "images/countryflags/th.png",
      iso_code: "TH",
    },
    {
      id: 10,
      country: "Myanmar",
      country_code: 95,
      flag_url: "images/countryflags/myanmar.png",
      iso_code: "MM",
    },
    {
      id: 89,
      country: "Vietnam",
      country_code: 84,
      flag_url: "images/countryflags/vaitnaam.png",
      iso_code: "VN",
    },
    {
      id: 3,
      country: "Singapore",
      country_code: 65,
      flag_url: "images/countryflags/sg.png",
      iso_code: "SG",
    },
    {
      id: 111,
      country: "Mexico",
      country_code: 52,
      flag_url: "random_file/image/53a74fa1be52ba4f.png",
      iso_code: "MX",
    },
    {
      id: 112,
      country: "Colombia",
      country_code: 57,
      flag_url: "random_file/image/85c97a6ce8720c44.png",
      iso_code: "CO",
    },
    {
      id: 113,
      country: "Czech Republic",
      country_code: 420,
      flag_url: "random_file/image/94d2f3bebec5c251.png",
      iso_code: "CZ",
    },
    {
      id: 114,
      country: "Portugal",
      country_code: 351,
      flag_url: "random_file/image/1eed036f4f1eee3c.png",
      iso_code: "PT",
    },
    {
      id: 115,
      country: "Ecuador",
      country_code: 593,
      flag_url: "random_file/image/7461ba52849c068c.png",
      iso_code: "EC",
    },
    {
      id: 116,
      country: "Peru",
      country_code: 51,
      flag_url: "random_file/image/03010375d6f0260d.png",
      iso_code: "PE",
    },
    {
      id: 117,
      country: "Austria",
      country_code: 43,
      flag_url: "random_file/image/d954a4078fb5a2c0.png",
      iso_code: "AT",
    },
    {
      id: 118,
      country: "Belgium",
      country_code: 32,
      flag_url: "random_file/image/e8d2f803e74d0854.png",
      iso_code: "BE",
    },
    {
      id: 119,
      country: "Poland",
      country_code: 48,
      flag_url: "random_file/image/8b03ea9332125bd9.png",
      iso_code: "PL",
    },
    {
      id: 120,
      country: "Hungary",
      country_code: 36,
      flag_url: "random_file/image/3f29f53804c1c32e.png",
      iso_code: "HU",
    },
    {
      id: 121,
      country: "Panama",
      country_code: 507,
      flag_url: "random_file/image/d8c61c3c13e484e4.png",
      iso_code: "PA",
    },
    {
      id: 122,
      country: "Fiji",
      country_code: 679,
      flag_url: "random_file/image/bc02a4071d14c360.png",
      iso_code: "FJ",
    },
    {
      id: 7,
      country: "Japan",
      country_code: 81,
      flag_url: "images/countryflags/jp.png",
      iso_code: "JP",
    },
    {
      id: 8,
      country: "United Kingdom",
      country_code: 44,
      flag_url: "images/countryflags/gb.png",
      iso_code: "GB",
    },
    {
      id: 9,
      country: "Australia",
      country_code: 61,
      flag_url: "images/countryflags/au.png",
      iso_code: "AU",
    },
    {
      id: 11,
      country: "United States of America",
      country_code: 1,
      flag_url: "images/countryflags/us.png",
      iso_code: "US",
    },
    {
      id: 12,
      country: "Iran",
      country_code: 98,
      flag_url: "images/countryflags/ir.png",
      iso_code: "IR",
    },
    {
      id: 13,
      country: "Iraq",
      country_code: 964,
      flag_url: "images/countryflags/iq.png",
      iso_code: "IQ",
    },
    {
      id: 14,
      country: "Israel",
      country_code: 972,
      flag_url: "images/countryflags/il.png",
      iso_code: "IL",
    },
    {
      id: 15,
      country: "Jordan",
      country_code: 962,
      flag_url: "images/countryflags/jo.png",
      iso_code: "JO",
    },
    {
      id: 16,
      country: "Lebanon",
      country_code: 961,
      flag_url: "images/countryflags/lb.png",
      iso_code: "LB",
    },
    {
      id: 17,
      country: "Kuwait",
      country_code: 965,
      flag_url: "images/countryflags/kw.png",
      iso_code: "KW",
    },
    {
      id: 18,
      country: "Bahrain",
      country_code: 973,
      flag_url: "images/countryflags/bh.png",
      iso_code: "BH",
    },
    {
      id: 19,
      country: "Qatar",
      country_code: 974,
      flag_url: "images/countryflags/qa.png",
      iso_code: "QA",
    },
    {
      id: 20,
      country: "Saudi Arabia",
      country_code: 966,
      flag_url: "images/countryflags/sa.png",
      iso_code: "SA",
    },
    {
      id: 21,
      country: "Syria",
      country_code: 963,
      flag_url: "images/countryflags/sy.png",
      iso_code: "SY",
    },
    {
      id: 22,
      country: "Yemen",
      country_code: 967,
      flag_url: "images/countryflags/ye.png",
      iso_code: "YE",
    },
    {
      id: 23,
      country: "United Arab Emirates",
      country_code: 971,
      flag_url: "images/countryflags/ae.png",
      iso_code: "AE",
    },
    {
      id: 24,
      country: "Turkey",
      country_code: 90,
      flag_url: "images/countryflags/tr.png",
      iso_code: "TR",
    },
    {
      id: 25,
      country: "Oman",
      country_code: 968,
      flag_url: "images/countryflags/om.png",
      iso_code: "OM",
    },
    {
      id: 26,
      country: "Egypt",
      country_code: 20,
      flag_url: "images/countryflags/eg.png",
      iso_code: "EG",
    },
    {
      id: 27,
      country: "Algeria",
      country_code: 213,
      flag_url: "images/countryflags/dz.png",
      iso_code: "DZ",
    },
    {
      id: 28,
      country: "Angola",
      country_code: 244,
      flag_url: "images/countryflags/ao.png",
      iso_code: "AO",
    },
    {
      id: 29,
      country: "Benin",
      country_code: 229,
      flag_url: "images/countryflags/bj.png",
      iso_code: "BJ",
    },
    {
      id: 30,
      country: "Botswana",
      country_code: 267,
      flag_url: "images/countryflags/bw.png",
      iso_code: "BW",
    },
    {
      id: 31,
      country: "Burkina Faso",
      country_code: 226,
      flag_url: "images/countryflags/bf.png",
      iso_code: "BF",
    },
    {
      id: 32,
      country: "Burundi",
      country_code: 257,
      flag_url: "images/countryflags/bi.png",
      iso_code: "BI",
    },
    {
      id: 33,
      country: "Cameroon",
      country_code: 237,
      flag_url: "images/countryflags/cm.png",
      iso_code: "CM",
    },
    {
      id: 34,
      country: "Cape Verde",
      country_code: 238,
      flag_url: "images/countryflags/cv.png",
      iso_code: "CV",
    },
    {
      id: 35,
      country: "Comoros",
      country_code: 269,
      flag_url: "images/countryflags/km.png",
      iso_code: "KM",
    },
    {
      id: 36,
      country: "Congo, Dem Rep",
      country_code: 243,
      flag_url: "images/countryflags/cd.png",
      iso_code: "CD",
    },
    {
      id: 37,
      country: "Djibouti",
      country_code: 253,
      flag_url: "images/countryflags/dj.png",
      iso_code: "DJ",
    },
    {
      id: 38,
      country: "Equatorial Guinea",
      country_code: 240,
      flag_url: "images/countryflags/gq.png",
      iso_code: "GQ",
    },
    {
      id: 39,
      country: "Eritrea",
      country_code: 291,
      flag_url: "images/countryflags/er.png",
      iso_code: "ER",
    },
    {
      id: 40,
      country: "Ethiopia",
      country_code: 251,
      flag_url: "images/countryflags/et.png",
      iso_code: "ET",
    },
    {
      id: 41,
      country: "Gabon",
      country_code: 241,
      flag_url: "images/countryflags/ga.png",
      iso_code: "GA",
    },
    {
      id: 42,
      country: "Gambia",
      country_code: 220,
      flag_url: "images/countryflags/gm.png",
      iso_code: "GM",
    },
    {
      id: 43,
      country: "Ghana",
      country_code: 233,
      flag_url: "images/countryflags/gh.png",
      iso_code: "GH",
    },
    {
      id: 44,
      country: "Guinea",
      country_code: 224,
      flag_url: "images/countryflags/gn.png",
      iso_code: "GN",
    },
    {
      id: 45,
      country: "Guinea-Bissau",
      country_code: 245,
      flag_url: "images/countryflags/gw.png",
      iso_code: "GW",
    },
    {
      id: 46,
      country: "Ivory Coast",
      country_code: 225,
      flag_url: "images/countryflags/ci.png",
      iso_code: "CI",
    },
    {
      id: 47,
      country: "Kenya",
      country_code: 254,
      flag_url: "images/countryflags/ke.png",
      iso_code: "KE",
    },
    {
      id: 48,
      country: "Lesotho",
      country_code: 266,
      flag_url: "images/countryflags/ls.png",
      iso_code: "LS",
    },
    {
      id: 49,
      country: "Liberia ",
      country_code: 231,
      flag_url: "images/countryflags/lr.png",
      iso_code: "LR",
    },
    {
      id: 50,
      country: "Libya",
      country_code: 218,
      flag_url: "images/countryflags/ly.png",
      iso_code: "LY",
    },
    {
      id: 51,
      country: "Madagascar",
      country_code: 261,
      flag_url: "images/countryflags/mg.png",
      iso_code: "MG",
    },
    {
      id: 52,
      country: "Malawi",
      country_code: 265,
      flag_url: "images/countryflags/mw.png",
      iso_code: "MW",
    },
    {
      id: 53,
      country: "Mali",
      country_code: 223,
      flag_url: "images/countryflags/ml.png",
      iso_code: "ML",
    },
    {
      id: 54,
      country: "Mauritania",
      country_code: 222,
      flag_url: "images/countryflags/mr.png",
      iso_code: "MR",
    },
    {
      id: 55,
      country: "Mauritius",
      country_code: 230,
      flag_url: "images/countryflags/mu.png",
      iso_code: "MU",
    },
    {
      id: 56,
      country: "Morocco/Western Sahara",
      country_code: 212,
      flag_url: "images/countryflags/ma.png",
      iso_code: "EH",
    },
    {
      id: 57,
      country: "Mozambique",
      country_code: 258,
      flag_url: "images/countryflags/mz.png",
      iso_code: "MZ",
    },
    {
      id: 58,
      country: "Namibia",
      country_code: 264,
      flag_url: "images/countryflags/na.png",
      iso_code: "NA",
    },
    {
      id: 59,
      country: "Niger",
      country_code: 227,
      flag_url: "images/countryflags/ne.png",
      iso_code: "NE",
    },
    {
      id: 60,
      country: "Nigeria",
      country_code: 234,
      flag_url: "images/countryflags/ng.png",
      iso_code: "NG",
    },
    {
      id: 61,
      country: "Mayotte",
      country_code: 262,
      flag_url: "images/countryflags/fr.png",
      iso_code: "YT",
    },
    {
      id: 62,
      country: "Rwanda",
      country_code: 250,
      flag_url: "images/countryflags/rw.png",
      iso_code: "RW",
    },
    {
      id: 63,
      country: "Sao Tome and Principe",
      country_code: 239,
      flag_url: "images/countryflags/st.png",
      iso_code: "ST",
    },
    {
      id: 64,
      country: "Senegal",
      country_code: 221,
      flag_url: "images/countryflags/sn.png",
      iso_code: "SN",
    },
    {
      id: 65,
      country: "Seychelles",
      country_code: 248,
      flag_url: "images/countryflags/sc.png",
      iso_code: "SC",
    },
    {
      id: 66,
      country: "Sierra Leone",
      country_code: 232,
      flag_url: "images/countryflags/sl.png",
      iso_code: "SL",
    },
    {
      id: 67,
      country: "Somalia",
      country_code: 252,
      flag_url: "images/countryflags/so.png",
      iso_code: "SO",
    },
    {
      id: 68,
      country: "South Africa",
      country_code: 27,
      flag_url: "images/countryflags/za.png",
      iso_code: "ZA",
    },
    {
      id: 69,
      country: "South Sudan",
      country_code: 211,
      flag_url: "images/countryflags/south-sudan.jpg",
      iso_code: "SS",
    },
    {
      id: 70,
      country: "Spain",
      country_code: 34,
      flag_url: "images/countryflags/es.png",
      iso_code: "ES",
    },
    {
      id: 71,
      country: "Sudan",
      country_code: 249,
      flag_url: "images/countryflags/sd.png",
      iso_code: "SD",
    },
    {
      id: 72,
      country: "Swaziland",
      country_code: 268,
      flag_url: "images/countryflags/sz.png",
      iso_code: "SZ",
    },
    {
      id: 73,
      country: "Tanzania",
      country_code: 255,
      flag_url: "images/countryflags/tz.png",
      iso_code: "TZ",
    },
    {
      id: 74,
      country: "Togo",
      country_code: 228,
      flag_url: "images/countryflags/tg.png",
      iso_code: "TG",
    },
    {
      id: 75,
      country: "Tunisia",
      country_code: 216,
      flag_url: "images/countryflags/tn.png",
      iso_code: "TN",
    },
    {
      id: 76,
      country: "Uganda",
      country_code: 256,
      flag_url: "images/countryflags/ug.png",
      iso_code: "UG",
    },
    {
      id: 77,
      country: "Zambia",
      country_code: 260,
      flag_url: "images/countryflags/zm.png",
      iso_code: "ZM",
    },
    {
      id: 78,
      country: "Zimbabwe",
      country_code: 263,
      flag_url: "images/countryflags/zw.png",
      iso_code: "ZW",
    },
    {
      id: 79,
      country: "Pakistan",
      country_code: 92,
      flag_url: "images/countryflags/pk.png",
      iso_code: "PK",
    },
    {
      id: 80,
      country: "Bangladesh",
      country_code: 880,
      flag_url: "images/countryflags/bd.png",
      iso_code: "BD",
    },
    {
      id: 81,
      country: "Afghanistan",
      country_code: 93,
      flag_url: "images/countryflags/af.png",
      iso_code: "AF",
    },
    {
      id: 82,
      country: "Nepal",
      country_code: 977,
      flag_url: "images/countryflags/np.png",
      iso_code: "NP",
    },
    {
      id: 83,
      country: "Sri Lanka",
      country_code: 94,
      flag_url: "images/countryflags/lk.png",
      iso_code: "LK",
    },
    {
      id: 84,
      country: "Congo",
      country_code: 242,
      flag_url: "images/countryflags/cg.png",
      iso_code: "CG",
    },
    {
      id: 85,
      country: "Chad",
      country_code: 235,
      flag_url: "images/countryflags/td.png",
      iso_code: "TD",
    },
    {
      id: 86,
      country: "Central African Republic",
      country_code: 236,
      flag_url: "images/countryflags/cf.png",
      iso_code: "CF",
    },
    {
      id: 87,
      country: "Palestinian Territory",
      country_code: 970,
      flag_url: "images/countryflags/pales.jpg",
      iso_code: "PS",
    },
    {
      id: 88,
      country: "Canary Islands",
      country_code: 3491,
      flag_url: "images/countryflags/es-.jpg",
      iso_code: "IC",
    },
    {
      id: 90,
      country: "Hong Kong",
      country_code: 852,
      flag_url: "images/countryflags/hong-kong.png",
      iso_code: "HK",
    },
    {
      id: 91,
      country: "Greece",
      country_code: 30,
      flag_url: "images/countryflags/Greece.png",
      iso_code: "GR",
    },
    {
      id: 92,
      country: "Ukraine",
      country_code: 380,
      flag_url: "images/countryflags/Ukraine.png",
      iso_code: "UA",
    },
    {
      id: 93,
      country: "China",
      country_code: 86,
      flag_url: "images/countryflags/China.png",
      iso_code: "CN",
    },
    {
      id: 94,
      country: "South Korea",
      country_code: 82,
      flag_url: "images/countryflags/SouthKorea.png",
      iso_code: "KR",
    },
    {
      id: 95,
      country: "Taiwan",
      country_code: 886,
      flag_url: "images/countryflags/Taiwan.png",
      iso_code: "TW",
    },
    {
      id: 96,
      country: "Mongolia",
      country_code: 976,
      flag_url: "images/countryflags/Mongolia.png",
      iso_code: "MN",
    },
    {
      id: 97,
      country: "Brazil",
      country_code: 55,
      flag_url: "images/countryflags/Brazil.png",
      iso_code: "BR",
    },
    {
      id: 98,
      country: "Canada",
      country_code: 1,
      flag_url: "images/countryflags/Canada.png",
      iso_code: "CA",
    },
    {
      id: 99,
      country: "Netherlands",
      country_code: 31,
      flag_url: "random_file/image/7493a8dd2e541047.png",
      iso_code: "NL",
    },
    {
      id: 100,
      country: "Lithuania",
      country_code: 370,
      flag_url: "images/countryflags/Lithuania.png",
      iso_code: "LT",
    },
    {
      id: 101,
      country: "Estonia",
      country_code: 372,
      flag_url: "images/countryflags/Estonia.png",
      iso_code: "EE",
    },
    {
      id: 102,
      country: "Switzerland",
      country_code: 41,
      flag_url: "random_file/image/f5c4b321f1bc17b0.png",
      iso_code: "CH",
    },
    {
      id: 103,
      country: "Germany",
      country_code: 49,
      flag_url: "random_file/image/15b7077785a5ba92.png",
      iso_code: "DE",
    },
    {
      id: 104,
      country: "Brunei",
      country_code: 673,
      flag_url: "random_file/image/c06c6e08b38d0b35.png",
      iso_code: "BN",
    },
    {
      id: 105,
      country: "Cambodia",
      country_code: 855,
      flag_url: "random_file/image/028ba64c2b55564a.png",
      iso_code: "KH",
    },
    {
      id: 106,
      country: "Laos",
      country_code: 856,
      flag_url: "random_file/image/cf524fa83f68dc67.png",
      iso_code: "LA",
    },
    {
      id: 107,
      country: "East Timor (Timor-Leste)",
      country_code: 670,
      flag_url: "random_file/image/668b7dfdf6e70811.png",
      iso_code: "TL",
    },
    {
      id: 108,
      country: "France",
      country_code: 33,
      flag_url: "random_file/image/24022665ab650295.jpg",
      iso_code: "FR",
    },
    {
      id: 109,
      country: "Italy",
      country_code: 39,
      flag_url: "random_file/image/9c56b684f7d6afa3.jpg",
      iso_code: "IT",
    },
    {
      id: 110,
      country: "Macau",
      country_code: 853,
      flag_url: "random_file/image/bf18a13f2bcf70fe.png",
      iso_code: "MO",
    },
    {
      id: 123,
      country: "New Zealand",
      country_code: 64,
      flag_url: "random_file/image/86e23078e13c8373.png",
      iso_code: "NZ",
    },
  ];

  function progressCompleted(message) {
    console.log('hre');
    console.log(message);
    fetch('https://docquity.com/detect/whatsmyip.php', { responseType: 'text' }).then(res => res.text())
    .then(body => {
      console.log(body);
    })
  }
  return (
    <div className="custom-container">
      <div className="p-4">
      <Autocomplete
        onSelect={handleSelect}
        suggestion={countryList}
      ></Autocomplete>
      <Progressbar onComplete={progressCompleted} duration={'5000'}></Progressbar>
        <h1 className="text-2xl">Welcome to my React app styled with Tailwind CSS!</h1>
        <button onClick={navigateToLogin}>Login</button>
        <p>Start building with Tailwind CSS now.</p>
      </div>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Only accessible at root */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
    </div>
  );
};

export default App;
