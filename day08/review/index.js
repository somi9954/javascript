const data = [
  {
    fullName: "Melly Bryers",
    gender: "Female",
    jobTitle: "Staff Accountant I",
    language: "Belarusian",
    ssn: "329-12-1591",
    money: "$789.50"
  },
  {
    fullName: "Atlante Grass",
    gender: "Female",
    jobTitle: "Nuclear Power Engineer",
    language: "Sotho",
    ssn: "603-81-8747",
    money: "$179.41"
  },
  {
    fullName: "Luci Bartzen",
    gender: "Female",
    jobTitle: "Quality Control Specialist",
    language: "Swedish",
    ssn: "883-48-1056",
    money: "$995.06"
  },
  {
    fullName: "Lucho Gerger",
    gender: "Male",
    jobTitle: "Senior Developer",
    language: "Northern Sotho",
    ssn: "417-33-4263",
    money: "$52.11"
  },
  {
    fullName: "Karrie Trendle",
    gender: "Female",
    jobTitle: "Software Engineer III",
    language: "Filipino",
    ssn: "304-07-8982",
    money: "$656.82"
  },
  {
    fullName: "Lorelei Harsum",
    gender: "Female",
    jobTitle: "Registered Nurse",
    language: "Oriya",
    ssn: "549-86-7193",
    money: "$564.53"
  },
  {
    fullName: "Ingeborg Keoghan",
    gender: "Female",
    jobTitle: "Staff Accountant III",
    language: "Telugu",
    ssn: "134-12-6230",
    money: "$484.81"
  },
  {
    fullName: "Katti Rubinow",
    gender: "Female",
    jobTitle: "Mechanical Systems Engineer",
    language: "New Zealand Sign Language",
    ssn: "121-60-4319",
    money: "$889.62"
  },
  {
    fullName: "Dean Ramard",
    gender: "Male",
    jobTitle: "Budget/Accounting Analyst IV",
    language: "Tswana",
    ssn: "607-05-2875",
    money: "$127.92"
  },
  {
    fullName: "Maribeth Girod",
    gender: "Female",
    jobTitle: "Nurse",
    language: "Tok Pisin",
    ssn: "412-46-9049",
    money: "$393.37"
  },
  {
    fullName: "Carie Measures",
    gender: "Female",
    jobTitle: "Geologist III",
    language: "Czech",
    ssn: "870-86-4919",
    money: "$465.39"
  },
  {
    fullName: "Dilly Bartolomeoni",
    gender: "Male",
    jobTitle: "Project Manager",
    language: "Lao",
    ssn: "785-52-9495",
    money: "$364.83"
  },
  {
    fullName: "Corny Hemstead",
    gender: "Male",
    jobTitle: "Teacher",
    language: "Oriya",
    ssn: "273-32-6924",
    money: "$488.14"
  },
  {
    fullName: "Milissent Brownfield",
    gender: "Female",
    jobTitle: "Director of Sales",
    language: "French",
    ssn: "726-75-1934",
    money: "$378.62"
  },
  {
    fullName: "Orly Barukh",
    gender: "Female",
    jobTitle: "Accountant III",
    language: "Albanian",
    ssn: "365-81-4731",
    money: "$711.62"
  },
  {
    fullName: "Horatia Axe",
    gender: "Female",
    jobTitle: "VP Marketing",
    language: "Finnish",
    ssn: "286-21-9548",
    money: "$170.18"
  },
  {
    fullName: "Noam Rosenwasser",
    gender: "Male",
    jobTitle: "Research Nurse",
    language: "Aymara",
    ssn: "265-84-9853",
    money: "$328.73"
  },
  {
    fullName: "Aron Grenter",
    gender: "Male",
    jobTitle: "Civil Engineer",
    language: "Gagauz",
    ssn: "174-66-5031",
    money: "$147.63"
  },
  {
    fullName: "Iseabal Bernade",
    gender: "Female",
    jobTitle: "Help Desk Operator",
    language: "Dhivehi",
    ssn: "774-14-1971",
    money: "$872.62"
  },
  {
    fullName: "Jakob Ledson",
    gender: "Male",
    jobTitle: "Paralegal",
    language: "Kazakh",
    ssn: "267-20-1733",
    money: "$95.59"
  },
  {
    fullName: "Ross Chitter",
    gender: "Male",
    jobTitle: "Physical Therapy Assistant",
    language: "Hindi",
    ssn: "402-73-5760",
    money: "$411.66"
  },
  {
    fullName: "Bert Chennells",
    gender: "Male",
    jobTitle: "Operator",
    language: "Indonesian",
    ssn: "450-34-4936",
    money: "$568.40"
  },
  {
    fullName: "Muhammad Tours",
    gender: "Male",
    jobTitle: "Physical Therapy Assistant",
    language: "Greek",
    ssn: "154-78-7374",
    money: "$92.02"
  },
  {
    fullName: "Amberly Bester",
    gender: "Female",
    jobTitle: "GIS Technical Architect",
    language: "German",
    ssn: "582-80-9568",
    money: "$256.55"
  },
  {
    fullName: "Luz Roth",
    gender: "Female",
    jobTitle: "Civil Engineer",
    language: "Nepali",
    ssn: "503-29-3491",
    money: "$397.26"
  },
  {
    fullName: "Elton McGillivray",
    gender: "Male",
    jobTitle: "Staff Accountant III",
    language: "Yiddish",
    ssn: "596-93-8740",
    money: "$750.32"
  },
  {
    fullName: "Maighdiln Joslyn",
    gender: "Female",
    jobTitle: "Professor",
    language: "Somali",
    ssn: "226-31-7994",
    money: "$280.88"
  },
  {
    fullName: "Loni Fetterplace",
    gender: "Female",
    jobTitle: "Marketing Assistant",
    language: "Kurdish",
    ssn: "473-64-8186",
    money: "$831.61"
  },
  {
    fullName: "Aila Zimek",
    gender: "Female",
    jobTitle: "Computer Systems Analyst II",
    language: "Belarusian",
    ssn: "385-82-1559",
    money: "$967.56"
  },
  {
    fullName: "Gigi Karpe",
    gender: "Female",
    jobTitle: "Director of Sales",
    language: "Romanian",
    ssn: "710-37-6438",
    money: "$261.34"
  },
  {
    fullName: "Fawn Fernehough",
    gender: "Female",
    jobTitle: "Administrative Officer",
    language: "Belarusian",
    ssn: "560-16-9444",
    money: "$391.91"
  },
  {
    fullName: "Clevey Steabler",
    gender: "Male",
    jobTitle: "Administrative Officer",
    language: "Somali",
    ssn: "206-92-5797",
    money: "$832.79"
  },
  {
    fullName: "Tremaine Hughesdon",
    gender: "Male",
    jobTitle: "Geological Engineer",
    language: "Norwegian",
    ssn: "728-62-8893",
    money: "$778.60"
  },
  {
    fullName: "Myranda Hayford",
    gender: "Female",
    jobTitle: "Accountant I",
    language: "Italian",
    ssn: "696-93-5082",
    money: "$231.20"
  },
  {
    fullName: "Casey Jouanet",
    gender: "Male",
    jobTitle: "Civil Engineer",
    language: "Kyrgyz",
    ssn: "210-19-4842",
    money: "$610.01"
  },
  {
    fullName: "Kameko Middlemiss",
    gender: "Female",
    jobTitle: "Systems Administrator IV",
    language: "Czech",
    ssn: "684-82-1991",
    money: "$441.19"
  },
  {
    fullName: "Engelbert Laneham",
    gender: "Male",
    jobTitle: "Physical Therapy Assistant",
    language: "Montenegrin",
    ssn: "568-44-2807",
    money: "$694.14"
  },
  {
    fullName: "Sheena Espinosa",
    gender: "Female",
    jobTitle: "Associate Professor",
    language: "Burmese",
    ssn: "383-47-1817",
    money: "$286.85"
  },
  {
    fullName: "Reinhard Gilhouley",
    gender: "Male",
    jobTitle: "Statistician I",
    language: "Oriya",
    ssn: "148-35-0738",
    money: "$852.33"
  },
  {
    fullName: "Nalani Jandl",
    gender: "Female",
    jobTitle: "Marketing Assistant",
    language: "Haitian Creole",
    ssn: "623-43-7017",
    money: "$191.34"
  },
  {
    fullName: "Umeko Fieller",
    gender: "Female",
    jobTitle: "Chief Design Engineer",
    language: "West Frisian",
    ssn: "598-60-8794",
    money: "$84.30"
  },
  {
    fullName: "Elbert Barge",
    gender: "Male",
    jobTitle: "Pharmacist",
    language: "Catalan",
    ssn: "540-62-2495",
    money: "$118.16"
  },
  {
    fullName: "Viole Kunes",
    gender: "Female",
    jobTitle: "Safety Technician IV",
    language: "Marathi",
    ssn: "210-51-5495",
    money: "$297.81"
  },
  {
    fullName: "Gawen Alen",
    gender: "Male",
    jobTitle: "Budget/Accounting Analyst II",
    language: "Nepali",
    ssn: "487-08-5389",
    money: "$197.05"
  },
  {
    fullName: "Troy Dillon",
    gender: "Male",
    jobTitle: "Software Test Engineer I",
    language: "Dzongkha",
    ssn: "580-91-3366",
    money: "$294.68"
  },
  {
    fullName: "Julius Lafuente",
    gender: "Male",
    jobTitle: "Operator",
    language: "Irish Gaelic",
    ssn: "874-23-4475",
    money: "$852.44"
  },
  {
    fullName: "Cybil Batiste",
    gender: "Female",
    jobTitle: "Tax Accountant",
    language: "Assamese",
    ssn: "340-61-5278",
    money: "$595.86"
  },
  {
    fullName: "Lurleen Hunnam",
    gender: "Female",
    jobTitle: "Design Engineer",
    language: "Oriya",
    ssn: "577-28-2095",
    money: "$875.18"
  },
  {
    fullName: "Nevile Yuille",
    gender: "Male",
    jobTitle: "Recruiting Manager",
    language: "Indonesian",
    ssn: "789-84-1652",
    money: "$547.10"
  },
  {
    fullName: "Eugene Arnall",
    gender: "Male",
    jobTitle: "VP Marketing",
    language: "Maltese",
    ssn: "203-09-3962",
    money: "$317.86"
  },
  {
    fullName: "Fidel Immings",
    gender: "Male",
    jobTitle: "Dental Hygienist",
    language: "Kannada",
    ssn: "622-50-9268",
    money: "$979.99"
  },
  {
    fullName: "Daniel Legister",
    gender: "Male",
    jobTitle: "Nuclear Power Engineer",
    language: "Malagasy",
    ssn: "714-11-5526",
    money: "$934.72"
  },
  {
    fullName: "Carolee Rubinlicht",
    gender: "Female",
    jobTitle: "Electrical Engineer",
    language: "Lao",
    ssn: "609-85-4675",
    money: "$6.26"
  },
  {
    fullName: "Erich Hemphill",
    gender: "Male",
    jobTitle: "Product Engineer",
    language: "Chinese",
    ssn: "643-56-9264",
    money: "$132.51"
  },
  {
    fullName: "Sondra Carnduff",
    gender: "Female",
    jobTitle: "Software Engineer II",
    language: "Ndebele",
    ssn: "776-40-6777",
    money: "$664.36"
  },
  {
    fullName: "Loutitia Guinnane",
    gender: "Female",
    jobTitle: "General Manager",
    language: "Croatian",
    ssn: "807-90-2264",
    money: "$577.11"
  },
  {
    fullName: "Jefferson Lethley",
    gender: "Male",
    jobTitle: "Software Consultant",
    language: "Malayalam",
    ssn: "110-13-9599",
    money: "$354.48"
  },
  {
    fullName: "Heath Tomovic",
    gender: "Female",
    jobTitle: "Product Engineer",
    language: "Malayalam",
    ssn: "443-64-7782",
    money: "$335.51"
  },
  {
    fullName: "Aloin Yellep",
    gender: "Male",
    jobTitle: "Software Test Engineer IV",
    language: "Azeri",
    ssn: "398-11-1961",
    money: "$95.03"
  },
  {
    fullName: "Ranee Millott",
    gender: "Female",
    jobTitle: "Senior Editor",
    language: "Hindi",
    ssn: "600-55-4147",
    money: "$902.00"
  },
  {
    fullName: "Minni Royste",
    gender: "Female",
    jobTitle: "Senior Sales Associate",
    language: "Tamil",
    ssn: "802-63-7488",
    money: "$849.50"
  },
  {
    fullName: "Janey Toseland",
    gender: "Female",
    jobTitle: "Desktop Support Technician",
    language: "Tsonga",
    ssn: "264-15-2348",
    money: "$498.23"
  },
  {
    fullName: "Raffarty Ralton",
    gender: "Male",
    jobTitle: "GIS Technical Architect",
    language: "Ndebele",
    ssn: "840-57-4854",
    money: "$206.69"
  },
  {
    fullName: "Syd Cockney",
    gender: "Male",
    jobTitle: "Biostatistician I",
    language: "Tamil",
    ssn: "757-29-1500",
    money: "$868.46"
  },
  {
    fullName: "Matthias Giocannoni",
    gender: "Male",
    jobTitle: "VP Quality Control",
    language: "Assamese",
    ssn: "626-25-9181",
    money: "$552.77"
  },
  {
    fullName: "Lari Wimbury",
    gender: "Female",
    jobTitle: "Account Executive",
    language: "Montenegrin",
    ssn: "651-25-6223",
    money: "$968.06"
  },
  {
    fullName: "Krystalle Leschelle",
    gender: "Female",
    jobTitle: "Structural Analysis Engineer",
    language: "Tswana",
    ssn: "428-38-3870",
    money: "$369.39"
  },
  {
    fullName: "Zsazsa Vasyaev",
    gender: "Female",
    jobTitle: "Marketing Manager",
    language: "Maltese",
    ssn: "839-19-4497",
    money: "$649.40"
  },
  {
    fullName: "Arliene Flisher",
    gender: "Female",
    jobTitle: "Systems Administrator I",
    language: "Filipino",
    ssn: "596-86-6913",
    money: "$72.59"
  },
  {
    fullName: "Arie Arrighini",
    gender: "Male",
    jobTitle: "Operator",
    language: "Sotho",
    ssn: "428-98-4949",
    money: "$270.11"
  },
  {
    fullName: "Audi Mathwen",
    gender: "Female",
    jobTitle: "Chemical Engineer",
    language: "Burmese",
    ssn: "354-89-8454",
    money: "$336.71"
  },
  {
    fullName: "Jackquelin Andino",
    gender: "Female",
    jobTitle: "Software Consultant",
    language: "Haitian Creole",
    ssn: "245-74-9064",
    money: "$111.01"
  },
  {
    fullName: "Agneta Gray",
    gender: "Female",
    jobTitle: "Senior Quality Engineer",
    language: "Maltese",
    ssn: "785-60-0243",
    money: "$484.66"
  },
  {
    fullName: "Tucker Gambles",
    gender: "Male",
    jobTitle: "Budget/Accounting Analyst II",
    language: "Georgian",
    ssn: "576-70-2547",
    money: "$137.12"
  },
  {
    fullName: "Roz Boij",
    gender: "Female",
    jobTitle: "Technical Writer",
    language: "Telugu",
    ssn: "110-39-3945",
    money: "$600.16"
  },
  {
    fullName: "Fitz Magister",
    gender: "Male",
    jobTitle: "VP Quality Control",
    language: "Armenian",
    ssn: "367-89-8928",
    money: "$585.87"
  },
  {
    fullName: "Carny MacElroy",
    gender: "Male",
    jobTitle: "Developer I",
    language: "Italian",
    ssn: "676-75-3165",
    money: "$250.23"
  },
  {
    fullName: "Trevor Warton",
    gender: "Male",
    jobTitle: "Accountant II",
    language: "Bengali",
    ssn: "656-32-8172",
    money: "$605.15"
  },
  {
    fullName: "Corette Biaggelli",
    gender: "Female",
    jobTitle: "Professor",
    language: "Guaraní",
    ssn: "453-82-2692",
    money: "$501.59"
  },
  {
    fullName: "Rasia Proske",
    gender: "Female",
    jobTitle: "Teacher",
    language: "Yiddish",
    ssn: "835-73-9100",
    money: "$53.54"
  },
  {
    fullName: "Germana Hollow",
    gender: "Female",
    jobTitle: "Electrical Engineer",
    language: "Burmese",
    ssn: "556-02-1402",
    money: "$634.42"
  },
  {
    fullName: "Lynde Blatherwick",
    gender: "Female",
    jobTitle: "Electrical Engineer",
    language: "Indonesian",
    ssn: "478-45-9818",
    money: "$904.51"
  },
  {
    fullName: "Bev Attac",
    gender: "Male",
    jobTitle: "Business Systems Development Analyst",
    language: "Malay",
    ssn: "452-38-2559",
    money: "$624.75"
  },
  {
    fullName: "Cassi Delahunty",
    gender: "Female",
    jobTitle: "Project Manager",
    language: "Norwegian",
    ssn: "829-06-8614",
    money: "$459.49"
  },
  {
    fullName: "Louella Shilstone",
    gender: "Female",
    jobTitle: "Editor",
    language: "Norwegian",
    ssn: "623-50-3469",
    money: "$444.14"
  },
  {
    fullName: "Jacquelyn Janssens",
    gender: "Female",
    jobTitle: "Actuary",
    language: "Kashmiri",
    ssn: "633-23-3576",
    money: "$251.67"
  },
  {
    fullName: "Dorie Noor",
    gender: "Male",
    jobTitle: "Speech Pathologist",
    language: "Azeri",
    ssn: "606-78-6116",
    money: "$547.58"
  },
  {
    fullName: "Rene Armatys",
    gender: "Male",
    jobTitle: "Analyst Programmer",
    language: "Georgian",
    ssn: "328-41-9947",
    money: "$517.86"
  },
  {
    fullName: "Octavia Climo",
    gender: "Female",
    jobTitle: "Database Administrator IV",
    language: "Malagasy",
    ssn: "685-31-1090",
    money: "$698.74"
  },
  {
    fullName: "Tim Valencia",
    gender: "Male",
    jobTitle: "Assistant Manager",
    language: "Armenian",
    ssn: "390-05-5475",
    money: "$857.80"
  },
  {
    fullName: "Broddy Forson",
    gender: "Male",
    jobTitle: "Account Executive",
    language: "Malayalam",
    ssn: "594-95-5161",
    money: "$267.51"
  },
  {
    fullName: "Teressa Sanham",
    gender: "Female",
    jobTitle: "Business Systems Development Analyst",
    language: "Catalan",
    ssn: "204-78-9758",
    money: "$830.37"
  },
  {
    fullName: "Mara Lamb-shine",
    gender: "Female",
    jobTitle: "Marketing Assistant",
    language: "Yiddish",
    ssn: "798-30-2770",
    money: "$327.40"
  },
  {
    fullName: "Michale Blagbrough",
    gender: "Male",
    jobTitle: "Senior Developer",
    language: "Northern Sotho",
    ssn: "488-49-0533",
    money: "$687.06"
  },
  {
    fullName: "Jilleen Taig",
    gender: "Female",
    jobTitle: "Associate Professor",
    language: "Northern Sotho",
    ssn: "788-03-3040",
    money: "$434.80"
  },
  {
    fullName: "Ambros Shillum",
    gender: "Male",
    jobTitle: "Compensation Analyst",
    language: "Telugu",
    ssn: "234-71-8638",
    money: "$810.57"
  },
  {
    fullName: "Diena Exall",
    gender: "Female",
    jobTitle: "VP Product Management",
    language: "Dari",
    ssn: "291-70-1121",
    money: "$669.24"
  },
  {
    fullName: "Robby Goodricke",
    gender: "Male",
    jobTitle: "Web Developer II",
    language: "Malagasy",
    ssn: "491-78-8911",
    money: "$198.24"
  },
  {
    fullName: "Terri Vaugham",
    gender: "Male",
    jobTitle: "Senior Quality Engineer",
    language: "Northern Sotho",
    ssn: "768-98-3160",
    money: "$653.98"
  },
  {
    fullName: "Danna Corbishley",
    gender: "Female",
    jobTitle: "Speech Pathologist",
    language: "Papiamento",
    ssn: "309-14-6511",
    money: "$310.30"
  },
  {
    fullName: "Simone Ilyunin",
    gender: "Female",
    jobTitle: "Automation Specialist III",
    language: "Indonesian",
    ssn: "617-47-5362",
    money: "$698.45"
  },
  {
    fullName: "Candie Daulby",
    gender: "Female",
    jobTitle: "Research Nurse",
    language: "Fijian",
    ssn: "266-73-5391",
    money: "$535.38"
  },
  {
    fullName: "Fredric Freeberne",
    gender: "Male",
    jobTitle: "Actuary",
    language: "Mongolian",
    ssn: "605-91-4873",
    money: "$156.16"
  },
  {
    fullName: "Ofella Messitt",
    gender: "Female",
    jobTitle: "Software Consultant",
    language: "Finnish",
    ssn: "631-76-5259",
    money: "$306.35"
  },
  {
    fullName: "Cale Acock",
    gender: "Male",
    jobTitle: "Senior Developer",
    language: "Icelandic",
    ssn: "201-42-7747",
    money: "$753.94"
  },
  {
    fullName: "Jerrome Claiden",
    gender: "Male",
    jobTitle: "Desktop Support Technician",
    language: "Afrikaans",
    ssn: "625-37-1517",
    money: "$812.76"
  },
  {
    fullName: "Meredithe Farfolomeev",
    gender: "Female",
    jobTitle: "Assistant Professor",
    language: "Guaraní",
    ssn: "167-42-6861",
    money: "$79.31"
  },
  {
    fullName: "Marybeth Delafont",
    gender: "Female",
    jobTitle: "Nuclear Power Engineer",
    language: "Hungarian",
    ssn: "648-22-1602",
    money: "$545.76"
  },
  {
    fullName: "Wynn Dursley",
    gender: "Female",
    jobTitle: "Statistician III",
    language: "Haitian Creole",
    ssn: "480-24-9800",
    money: "$969.24"
  },
  {
    fullName: "Myles Older",
    gender: "Male",
    jobTitle: "Software Engineer III",
    language: "Somali",
    ssn: "876-53-6655",
    money: "$265.97"
  },
  {
    fullName: "Dulci Gyurko",
    gender: "Female",
    jobTitle: "Recruiting Manager",
    language: "Greek",
    ssn: "212-62-5916",
    money: "$140.61"
  },
  {
    fullName: "Yetta McDunlevy",
    gender: "Female",
    jobTitle: "Editor",
    language: "Azeri",
    ssn: "615-27-5772",
    money: "$857.60"
  },
  {
    fullName: "Paolo Rump",
    gender: "Male",
    jobTitle: "Assistant Manager",
    language: "Marathi",
    ssn: "682-99-3110",
    money: "$22.64"
  },
  {
    fullName: "Aileen Rudolf",
    gender: "Female",
    jobTitle: "VP Quality Control",
    language: "Hungarian",
    ssn: "868-86-7702",
    money: "$693.31"
  },
  {
    fullName: "Cherin O' Hanvey",
    gender: "Female",
    jobTitle: "Nurse",
    language: "Hungarian",
    ssn: "713-21-2458",
    money: "$65.90"
  },
  {
    fullName: "Sydney Moxsom",
    gender: "Male",
    jobTitle: "Programmer III",
    language: "Malayalam",
    ssn: "120-52-1296",
    money: "$720.71"
  },
  {
    fullName: "Dominique Lyffe",
    gender: "Female",
    jobTitle: "Nurse",
    language: "Ndebele",
    ssn: "626-87-1604",
    money: "$449.76"
  },
  {
    fullName: "Andras Perin",
    gender: "Male",
    jobTitle: "Analog Circuit Design manager",
    language: "Somali",
    ssn: "530-05-5712",
    money: "$463.13"
  },
  {
    fullName: "Lenard Dwyer",
    gender: "Male",
    jobTitle: "Sales Associate",
    language: "Danish",
    ssn: "425-93-9931",
    money: "$377.09"
  },
  {
    fullName: "Janenna MacQuist",
    gender: "Female",
    jobTitle: "Quality Engineer",
    language: "Papiamento",
    ssn: "217-45-1525",
    money: "$998.41"
  },
  {
    fullName: "Cordie Elacoate",
    gender: "Male",
    jobTitle: "Editor",
    language: "Estonian",
    ssn: "796-59-3974",
    money: "$777.82"
  },
  {
    fullName: "Tallie Kingsnoad",
    gender: "Female",
    jobTitle: "Chief Design Engineer",
    language: "Belarusian",
    ssn: "604-28-4931",
    money: "$685.37"
  },
  {
    fullName: "Webster Iles",
    gender: "Male",
    jobTitle: "Analyst Programmer",
    language: "Czech",
    ssn: "457-24-4918",
    money: "$605.31"
  },
  {
    fullName: "Hugo Wyss",
    gender: "Male",
    jobTitle: "Assistant Manager",
    language: "Estonian",
    ssn: "251-76-8454",
    money: "$554.61"
  },
  {
    fullName: "Sigfrid O'Loghlen",
    gender: "Male",
    jobTitle: "Mechanical Systems Engineer",
    language: "Persian",
    ssn: "719-53-9751",
    money: "$26.47"
  },
  {
    fullName: "Orlando Gonthard",
    gender: "Male",
    jobTitle: "Marketing Manager",
    language: "Kurdish",
    ssn: "555-65-5203",
    money: "$776.74"
  },
  {
    fullName: "Dianne Abernethy",
    gender: "Female",
    jobTitle: "VP Marketing",
    language: "Tamil",
    ssn: "387-97-0698",
    money: "$10.28"
  },
  {
    fullName: "Thedrick Bonds",
    gender: "Male",
    jobTitle: "Account Coordinator",
    language: "Aymara",
    ssn: "209-72-9342",
    money: "$17.49"
  },
  {
    fullName: "Alane Easterling",
    gender: "Female",
    jobTitle: "Community Outreach Specialist",
    language: "Swahili",
    ssn: "685-09-6547",
    money: "$674.36"
  },
  {
    fullName: "Francisca Plumley",
    gender: "Female",
    jobTitle: "Data Coordinator",
    language: "Croatian",
    ssn: "652-70-9026",
    money: "$923.47"
  },
  {
    fullName: "Jean Ginnelly",
    gender: "Male",
    jobTitle: "VP Product Management",
    language: "Māori",
    ssn: "809-49-4695",
    money: "$567.59"
  },
  {
    fullName: "Lemar Petley",
    gender: "Male",
    jobTitle: "VP Marketing",
    language: "Dari",
    ssn: "367-23-0250",
    money: "$427.25"
  },
  {
    fullName: "Gill Macguire",
    gender: "Female",
    jobTitle: "Office Assistant IV",
    language: "Italian",
    ssn: "779-29-2320",
    money: "$978.96"
  },
  {
    fullName: "Merrill Staley",
    gender: "Female",
    jobTitle: "Environmental Tech",
    language: "Maltese",
    ssn: "275-26-9267",
    money: "$34.53"
  },
  {
    fullName: "Celinda Barritt",
    gender: "Female",
    jobTitle: "VP Marketing",
    language: "Mongolian",
    ssn: "588-92-9027",
    money: "$792.24"
  },
  {
    fullName: "Waneta Delbergue",
    gender: "Female",
    jobTitle: "Recruiting Manager",
    language: "Amharic",
    ssn: "715-13-2939",
    money: "$204.46"
  },
  {
    fullName: "Jessamyn Cuddy",
    gender: "Female",
    jobTitle: "Senior Developer",
    language: "Dari",
    ssn: "852-79-3830",
    money: "$754.45"
  },
  {
    fullName: "Haywood Izaks",
    gender: "Male",
    jobTitle: "General Manager",
    language: "Guaraní",
    ssn: "632-54-0350",
    money: "$50.41"
  },
  {
    fullName: "Arne Madsen",
    gender: "Male",
    jobTitle: "Programmer Analyst I",
    language: "Danish",
    ssn: "801-53-0121",
    money: "$855.82"
  },
  {
    fullName: "Pepito Noorwood",
    gender: "Male",
    jobTitle: "Payment Adjustment Coordinator",
    language: "Māori",
    ssn: "287-98-1400",
    money: "$950.26"
  },
  {
    fullName: "Mirilla Di Franceshci",
    gender: "Female",
    jobTitle: "Paralegal",
    language: "Tetum",
    ssn: "167-52-8525",
    money: "$897.98"
  },
  {
    fullName: "Retha Caudell",
    gender: "Female",
    jobTitle: "Data Coordinator",
    language: "Lithuanian",
    ssn: "154-66-3045",
    money: "$520.27"
  },
  {
    fullName: "Aloysia Figgs",
    gender: "Female",
    jobTitle: "Safety Technician II",
    language: "Azeri",
    ssn: "283-23-6773",
    money: "$42.62"
  },
  {
    fullName: "Arturo Goslin",
    gender: "Male",
    jobTitle: "Human Resources Assistant I",
    language: "Bengali",
    ssn: "665-13-3093",
    money: "$939.59"
  },
  {
    fullName: "Cecil Nestor",
    gender: "Female",
    jobTitle: "Registered Nurse",
    language: "Aymara",
    ssn: "780-65-8124",
    money: "$398.18"
  },
  {
    fullName: "Antonin Eden",
    gender: "Male",
    jobTitle: "Help Desk Technician",
    language: "Lithuanian",
    ssn: "476-93-1726",
    money: "$428.83"
  },
  {
    fullName: "Rosetta Simeonov",
    gender: "Female",
    jobTitle: "Speech Pathologist",
    language: "Hindi",
    ssn: "522-17-0348",
    money: "$103.79"
  },
  {
    fullName: "Ives Dafter",
    gender: "Male",
    jobTitle: "Account Representative I",
    language: "Montenegrin",
    ssn: "568-81-3626",
    money: "$485.76"
  },
  {
    fullName: "Cara Beevens",
    gender: "Female",
    jobTitle: "Desktop Support Technician",
    language: "Mongolian",
    ssn: "292-04-2706",
    money: "$236.40"
  },
  {
    fullName: "Corine Glusby",
    gender: "Female",
    jobTitle: "Assistant Professor",
    language: "Bosnian",
    ssn: "308-62-0054",
    money: "$468.78"
  },
  {
    fullName: "Darci Strood",
    gender: "Female",
    jobTitle: "Developer III",
    language: "Bulgarian",
    ssn: "858-18-0896",
    money: "$84.27"
  },
  {
    fullName: "Lyssa Alven",
    gender: "Female",
    jobTitle: "Budget/Accounting Analyst I",
    language: "Japanese",
    ssn: "776-07-5853",
    money: "$718.17"
  },
  {
    fullName: "Roobbie Hillitt",
    gender: "Female",
    jobTitle: "Sales Representative",
    language: "Belarusian",
    ssn: "765-95-7940",
    money: "$33.23"
  },
  {
    fullName: "Mikol Oager",
    gender: "Male",
    jobTitle: "Automation Specialist II",
    language: "Gujarati",
    ssn: "878-45-3573",
    money: "$133.00"
  },
  {
    fullName: "Faina Jubb",
    gender: "Female",
    jobTitle: "Financial Advisor",
    language: "Indonesian",
    ssn: "591-26-0895",
    money: "$298.47"
  },
  {
    fullName: "Rees Kingsworth",
    gender: "Male",
    jobTitle: "Analog Circuit Design manager",
    language: "Burmese",
    ssn: "523-65-4388",
    money: "$612.77"
  },
  {
    fullName: "Elene Klosser",
    gender: "Female",
    jobTitle: "Help Desk Technician",
    language: "Azeri",
    ssn: "241-60-7032",
    money: "$954.75"
  },
  {
    fullName: "Davide Packwood",
    gender: "Male",
    jobTitle: "Developer I",
    language: "Hiri Motu",
    ssn: "603-27-9844",
    money: "$559.88"
  },
  {
    fullName: "Hernando Loudwell",
    gender: "Male",
    jobTitle: "Web Designer III",
    language: "Armenian",
    ssn: "225-77-7188",
    money: "$948.21"
  },
  {
    fullName: "Kipp Simoneton",
    gender: "Female",
    jobTitle: "Data Coordinator",
    language: "Finnish",
    ssn: "545-74-0603",
    money: "$710.28"
  },
  {
    fullName: "Daron Fursland",
    gender: "Male",
    jobTitle: "Administrative Officer",
    language: "Tswana",
    ssn: "250-78-1692",
    money: "$210.41"
  },
  {
    fullName: "Norbie Sillitoe",
    gender: "Male",
    jobTitle: "Quality Control Specialist",
    language: "Italian",
    ssn: "510-45-3868",
    money: "$23.25"
  },
  {
    fullName: "Dyane Karby",
    gender: "Female",
    jobTitle: "Safety Technician III",
    language: "Malayalam",
    ssn: "144-64-7352",
    money: "$752.75"
  },
  {
    fullName: "Jacinda McElmurray",
    gender: "Female",
    jobTitle: "Chemical Engineer",
    language: "Catalan",
    ssn: "174-25-8321",
    money: "$233.84"
  },
  {
    fullName: "Winni Sivess",
    gender: "Female",
    jobTitle: "Human Resources Assistant IV",
    language: "Northern Sotho",
    ssn: "415-75-7593",
    money: "$264.34"
  },
  {
    fullName: "Hillie MacConnell",
    gender: "Male",
    jobTitle: "Software Test Engineer III",
    language: "Tajik",
    ssn: "676-91-9004",
    money: "$787.62"
  },
  {
    fullName: "Yehudit Courtonne",
    gender: "Male",
    jobTitle: "Accounting Assistant IV",
    language: "Kashmiri",
    ssn: "761-86-7907",
    money: "$413.25"
  },
  {
    fullName: "Amara Salandino",
    gender: "Female",
    jobTitle: "Project Manager",
    language: "Maltese",
    ssn: "469-97-6517",
    money: "$174.03"
  },
  {
    fullName: "Breena Danielut",
    gender: "Female",
    jobTitle: "Automation Specialist I",
    language: "Punjabi",
    ssn: "544-06-2310",
    money: "$280.03"
  },
  {
    fullName: "Gracie Taffurelli",
    gender: "Female",
    jobTitle: "Staff Scientist",
    language: "Latvian",
    ssn: "265-21-3517",
    money: "$101.11"
  },
  {
    fullName: "Venus Rocca",
    gender: "Female",
    jobTitle: "Structural Engineer",
    language: "Tajik",
    ssn: "767-69-6109",
    money: "$760.46"
  },
  {
    fullName: "Faun Fairfoull",
    gender: "Female",
    jobTitle: "Cost Accountant",
    language: "Dhivehi",
    ssn: "737-48-2831",
    money: "$290.34"
  },
  {
    fullName: "Jeanne Burnitt",
    gender: "Female",
    jobTitle: "Chemical Engineer",
    language: "Gujarati",
    ssn: "801-14-1672",
    money: "$375.56"
  },
  {
    fullName: "Etheline Winfred",
    gender: "Female",
    jobTitle: "General Manager",
    language: "Aymara",
    ssn: "701-36-6258",
    money: "$455.34"
  },
  {
    fullName: "Delcina Cordingley",
    gender: "Female",
    jobTitle: "Programmer IV",
    language: "Dari",
    ssn: "122-67-4801",
    money: "$737.13"
  },
  {
    fullName: "Giacomo Barstowk",
    gender: "Male",
    jobTitle: "Assistant Professor",
    language: "New Zealand Sign Language",
    ssn: "755-68-9108",
    money: "$668.24"
  },
  {
    fullName: "Denney Dungate",
    gender: "Male",
    jobTitle: "Media Manager IV",
    language: "Macedonian",
    ssn: "377-26-0100",
    money: "$442.67"
  },
  {
    fullName: "Fitzgerald Shemilt",
    gender: "Male",
    jobTitle: "Staff Accountant III",
    language: "Bulgarian",
    ssn: "602-50-1713",
    money: "$718.37"
  },
  {
    fullName: "Carola Alpes",
    gender: "Female",
    jobTitle: "Environmental Specialist",
    language: "Latvian",
    ssn: "566-99-7370",
    money: "$250.79"
  },
  {
    fullName: "Blisse Hawkeswood",
    gender: "Female",
    jobTitle: "Financial Analyst",
    language: "Haitian Creole",
    ssn: "504-79-7244",
    money: "$311.74"
  },
  {
    fullName: "Staci Arpur",
    gender: "Female",
    jobTitle: "Safety Technician II",
    language: "Gujarati",
    ssn: "643-58-7208",
    money: "$793.89"
  },
  {
    fullName: "Doloritas Burkart",
    gender: "Female",
    jobTitle: "Project Manager",
    language: "German",
    ssn: "402-26-5162",
    money: "$733.85"
  },
  {
    fullName: "Hynda Laxon",
    gender: "Female",
    jobTitle: "Sales Representative",
    language: "Dutch",
    ssn: "102-08-1359",
    money: "$64.77"
  },
  {
    fullName: "Bayard Assel",
    gender: "Male",
    jobTitle: "Developer IV",
    language: "Czech",
    ssn: "264-68-9634",
    money: "$190.17"
  },
  {
    fullName: "Prissie Sheilds",
    gender: "Female",
    jobTitle: "Civil Engineer",
    language: "Norwegian",
    ssn: "860-64-5003",
    money: "$725.47"
  },
  {
    fullName: "Lida Rebbeck",
    gender: "Female",
    jobTitle: "Civil Engineer",
    language: "Haitian Creole",
    ssn: "122-14-0958",
    money: "$84.54"
  },
  {
    fullName: "Aland Demicoli",
    gender: "Male",
    jobTitle: "Recruiter",
    language: "West Frisian",
    ssn: "297-44-4633",
    money: "$647.10"
  },
  {
    fullName: "Chicky Begbie",
    gender: "Male",
    jobTitle: "Research Associate",
    language: "Ndebele",
    ssn: "451-54-9654",
    money: "$873.39"
  },
  {
    fullName: "Chrissy MacKerley",
    gender: "Female",
    jobTitle: "Research Associate",
    language: "Quechua",
    ssn: "843-63-0218",
    money: "$584.13"
  },
  {
    fullName: "Worthy Listone",
    gender: "Male",
    jobTitle: "Account Coordinator",
    language: "New Zealand Sign Language",
    ssn: "114-97-9634",
    money: "$878.51"
  },
  {
    fullName: "Jenilee Loosely",
    gender: "Female",
    jobTitle: "Community Outreach Specialist",
    language: "Yiddish",
    ssn: "187-63-2627",
    money: "$852.42"
  },
  {
    fullName: "Sheilakathryn Epgrave",
    gender: "Female",
    jobTitle: "Teacher",
    language: "Hebrew",
    ssn: "375-26-7264",
    money: "$579.26"
  },
  {
    fullName: "Letisha Partington",
    gender: "Female",
    jobTitle: "Marketing Manager",
    language: "Dzongkha",
    ssn: "716-34-8936",
    money: "$370.82"
  },
  {
    fullName: "Darby Hucklesby",
    gender: "Female",
    jobTitle: "Administrative Officer",
    language: "Armenian",
    ssn: "330-70-3123",
    money: "$720.05"
  },
  {
    fullName: "Beniamino Crippen",
    gender: "Male",
    jobTitle: "Statistician IV",
    language: "Macedonian",
    ssn: "427-71-3132",
    money: "$240.89"
  },
  {
    fullName: "Shela De Coursey",
    gender: "Female",
    jobTitle: "Assistant Professor",
    language: "English",
    ssn: "437-62-1622",
    money: "$290.61"
  },
  {
    fullName: "Kris Wych",
    gender: "Male",
    jobTitle: "Internal Auditor",
    language: "Fijian",
    ssn: "825-96-1045",
    money: "$103.08"
  },
  {
    fullName: "Roanna Borzoni",
    gender: "Female",
    jobTitle: "Speech Pathologist",
    language: "Montenegrin",
    ssn: "173-57-6826",
    money: "$224.95"
  },
  {
    fullName: "Avis Grummitt",
    gender: "Female",
    jobTitle: "Mechanical Systems Engineer",
    language: "Mongolian",
    ssn: "739-87-2103",
    money: "$267.83"
  },
  {
    fullName: "Randie Rofe",
    gender: "Male",
    jobTitle: "Community Outreach Specialist",
    language: "Estonian",
    ssn: "473-38-8011",
    money: "$319.41"
  },
  {
    fullName: "Garth Forsythe",
    gender: "Male",
    jobTitle: "VP Quality Control",
    language: "Hiri Motu",
    ssn: "341-97-0712",
    money: "$519.70"
  },
  {
    fullName: "Salvatore Marushak",
    gender: "Male",
    jobTitle: "Electrical Engineer",
    language: "Kashmiri",
    ssn: "325-18-1924",
    money: "$273.21"
  },
  {
    fullName: "Leupold Lambotin",
    gender: "Male",
    jobTitle: "Design Engineer",
    language: "Armenian",
    ssn: "395-41-9487",
    money: "$593.62"
  },
  {
    fullName: "Bo Monger",
    gender: "Male",
    jobTitle: "Administrative Officer",
    language: "Sotho",
    ssn: "419-34-9869",
    money: "$440.63"
  },
  {
    fullName: "Rochella Sweeting",
    gender: "Female",
    jobTitle: "Research Associate",
    language: "Māori",
    ssn: "411-14-8698",
    money: "$75.60"
  },
  {
    fullName: "Mike Winston",
    gender: "Male",
    jobTitle: "Occupational Therapist",
    language: "Dutch",
    ssn: "408-74-2529",
    money: "$723.36"
  },
  {
    fullName: "Janna Dionisi",
    gender: "Female",
    jobTitle: "Analyst Programmer",
    language: "Romanian",
    ssn: "754-51-8214",
    money: "$694.02"
  },
  {
    fullName: "Ailina Steuart",
    gender: "Female",
    jobTitle: "Financial Advisor",
    language: "Pashto",
    ssn: "412-70-7695",
    money: "$634.09"
  },
  {
    fullName: "Micky Macbane",
    gender: "Female",
    jobTitle: "Paralegal",
    language: "Quechua",
    ssn: "656-69-2433",
    money: "$747.41"
  },
  {
    fullName: "Barton Brimilcombe",
    gender: "Male",
    jobTitle: "Pharmacist",
    language: "Czech",
    ssn: "454-84-4509",
    money: "$767.83"
  },
  {
    fullName: "Tallie Gambie",
    gender: "Female",
    jobTitle: "Senior Financial Analyst",
    language: "Moldovan",
    ssn: "568-94-7398",
    money: "$119.03"
  },
  {
    fullName: "Noland Couling",
    gender: "Male",
    jobTitle: "Actuary",
    language: "English",
    ssn: "128-12-4108",
    money: "$947.65"
  },
  {
    fullName: "Jolene MacArte",
    gender: "Female",
    jobTitle: "VP Quality Control",
    language: "Arabic",
    ssn: "504-18-6317",
    money: "$136.75"
  },
  {
    fullName: "Dewain Opie",
    gender: "Male",
    jobTitle: "Accounting Assistant IV",
    language: "Catalan",
    ssn: "538-29-0573",
    money: "$581.37"
  },
  {
    fullName: "Jaquenette Goley",
    gender: "Female",
    jobTitle: "Registered Nurse",
    language: "Persian",
    ssn: "184-97-1463",
    money: "$399.75"
  },
  {
    fullName: "Yolanthe Le Maitre",
    gender: "Female",
    jobTitle: "Nurse Practicioner",
    language: "Malagasy",
    ssn: "551-14-7271",
    money: "$741.71"
  },
  {
    fullName: "Wyn Sewley",
    gender: "Male",
    jobTitle: "Compensation Analyst",
    language: "Assamese",
    ssn: "305-26-1887",
    money: "$972.91"
  },
  {
    fullName: "Orville Juschke",
    gender: "Male",
    jobTitle: "Automation Specialist IV",
    language: "Amharic",
    ssn: "214-70-3469",
    money: "$184.69"
  },
  {
    fullName: "Bill Reynoldson",
    gender: "Male",
    jobTitle: "Chief Design Engineer",
    language: "Hiri Motu",
    ssn: "134-68-4103",
    money: "$854.96"
  },
  {
    fullName: "Dewey Maulden",
    gender: "Male",
    jobTitle: "Cost Accountant",
    language: "Malayalam",
    ssn: "164-16-6137",
    money: "$754.56"
  },
  {
    fullName: "Della Lawful",
    gender: "Female",
    jobTitle: "Web Developer IV",
    language: "Somali",
    ssn: "418-30-3936",
    money: "$378.93"
  },
  {
    fullName: "Putnam Jerosch",
    gender: "Male",
    jobTitle: "Community Outreach Specialist",
    language: "Japanese",
    ssn: "661-85-6448",
    money: "$368.48"
  },
  {
    fullName: "Dallis Rodgier",
    gender: "Male",
    jobTitle: "Accountant IV",
    language: "French",
    ssn: "269-39-7234",
    money: "$388.54"
  },
  {
    fullName: "Maude Blackaller",
    gender: "Female",
    jobTitle: "Web Designer III",
    language: "Afrikaans",
    ssn: "830-35-3996",
    money: "$514.48"
  },
  {
    fullName: "Mathew Kinforth",
    gender: "Male",
    jobTitle: "Civil Engineer",
    language: "Yiddish",
    ssn: "392-11-9941",
    money: "$574.53"
  },
  {
    fullName: "Arne Postan",
    gender: "Male",
    jobTitle: "Junior Executive",
    language: "Azeri",
    ssn: "300-30-6242",
    money: "$957.56"
  },
  {
    fullName: "James Adnam",
    gender: "Male",
    jobTitle: "Business Systems Development Analyst",
    language: "Khmer",
    ssn: "744-61-6003",
    money: "$1.59"
  },
  {
    fullName: "Peg Revett",
    gender: "Female",
    jobTitle: "Account Coordinator",
    language: "Polish",
    ssn: "330-18-6049",
    money: "$907.18"
  },
  {
    fullName: "Mallory Pennini",
    gender: "Male",
    jobTitle: "Actuary",
    language: "Armenian",
    ssn: "629-66-6310",
    money: "$91.45"
  },
  {
    fullName: "Frannie Dudding",
    gender: "Female",
    jobTitle: "Assistant Manager",
    language: "German",
    ssn: "542-34-8347",
    money: "$944.00"
  },
  {
    fullName: "Calv Bachman",
    gender: "Male",
    jobTitle: "Environmental Specialist",
    language: "Yiddish",
    ssn: "592-70-8970",
    money: "$511.31"
  },
  {
    fullName: "Perle MacTeggart",
    gender: "Female",
    jobTitle: "Dental Hygienist",
    language: "Azeri",
    ssn: "663-46-9588",
    money: "$587.02"
  },
  {
    fullName: "Lira Rollin",
    gender: "Female",
    jobTitle: "Teacher",
    language: "Burmese",
    ssn: "319-84-7268",
    money: "$305.84"
  },
  {
    fullName: "Maxi Tomovic",
    gender: "Female",
    jobTitle: "Environmental Specialist",
    language: "Japanese",
    ssn: "165-19-5505",
    money: "$381.83"
  },
  {
    fullName: "Valene Follacaro",
    gender: "Female",
    jobTitle: "Human Resources Assistant II",
    language: "Fijian",
    ssn: "884-33-7119",
    money: "$426.46"
  },
  {
    fullName: "Darla Ladlow",
    gender: "Female",
    jobTitle: "Computer Systems Analyst II",
    language: "Indonesian",
    ssn: "798-07-5151",
    money: "$663.62"
  },
  {
    fullName: "Sven Collings",
    gender: "Male",
    jobTitle: "Safety Technician III",
    language: "Māori",
    ssn: "812-73-6511",
    money: "$716.76"
  },
  {
    fullName: "Jerome Breede",
    gender: "Male",
    jobTitle: "Administrative Assistant I",
    language: "Burmese",
    ssn: "432-06-0792",
    money: "$30.57"
  },
  {
    fullName: "Ardith Ades",
    gender: "Female",
    jobTitle: "Nuclear Power Engineer",
    language: "Khmer",
    ssn: "533-18-5774",
    money: "$810.29"
  },
  {
    fullName: "Graham Aspinell",
    gender: "Male",
    jobTitle: "Environmental Tech",
    language: "Bulgarian",
    ssn: "331-88-7265",
    money: "$766.70"
  },
  {
    fullName: "Reggy Dignan",
    gender: "Male",
    jobTitle: "Tax Accountant",
    language: "Hindi",
    ssn: "887-78-2302",
    money: "$833.24"
  },
  {
    fullName: "Gran Mariel",
    gender: "Male",
    jobTitle: "Senior Developer",
    language: "Bengali",
    ssn: "388-12-4874",
    money: "$2.53"
  },
  {
    fullName: "Christa Woolveridge",
    gender: "Female",
    jobTitle: "Desktop Support Technician",
    language: "Tetum",
    ssn: "639-73-7428",
    money: "$34.35"
  },
  {
    fullName: "Bren Gwyn",
    gender: "Female",
    jobTitle: "Software Consultant",
    language: "Pashto",
    ssn: "787-91-4507",
    money: "$138.10"
  },
  {
    fullName: "Ellie Obeney",
    gender: "Female",
    jobTitle: "Engineer I",
    language: "Bislama",
    ssn: "564-69-4622",
    money: "$341.97"
  },
  {
    fullName: "Travus Braga",
    gender: "Male",
    jobTitle: "Junior Executive",
    language: "Macedonian",
    ssn: "819-78-2844",
    money: "$896.71"
  },
  {
    fullName: "Jerrine Solano",
    gender: "Female",
    jobTitle: "Account Representative IV",
    language: "Oriya",
    ssn: "283-41-4716",
    money: "$386.70"
  },
  {
    fullName: "Noreen Quant",
    gender: "Female",
    jobTitle: "Database Administrator III",
    language: "Hungarian",
    ssn: "649-76-2492",
    money: "$868.80"
  },
  {
    fullName: "Baxy Dinneen",
    gender: "Male",
    jobTitle: "Senior Editor",
    language: "Gagauz",
    ssn: "203-18-9640",
    money: "$24.61"
  },
  {
    fullName: "Quinta Martschke",
    gender: "Female",
    jobTitle: "Speech Pathologist",
    language: "Papiamento",
    ssn: "472-73-5194",
    money: "$570.83"
  },
  {
    fullName: "Forrest Harome",
    gender: "Male",
    jobTitle: "Chemical Engineer",
    language: "Luxembourgish",
    ssn: "759-17-1133",
    money: "$915.18"
  },
  {
    fullName: "Carree MacNaughton",
    gender: "Female",
    jobTitle: "Data Coordinator",
    language: "Dhivehi",
    ssn: "499-50-9672",
    money: "$834.81"
  },
  {
    fullName: "Corny Yearron",
    gender: "Female",
    jobTitle: "Assistant Manager",
    language: "Dhivehi",
    ssn: "747-90-9005",
    money: "$994.23"
  },
  {
    fullName: "Selby Yitshak",
    gender: "Male",
    jobTitle: "Compensation Analyst",
    language: "Armenian",
    ssn: "537-27-1173",
    money: "$554.05"
  },
  {
    fullName: "Arlene Label",
    gender: "Female",
    jobTitle: "Dental Hygienist",
    language: "Lao",
    ssn: "184-64-3586",
    money: "$357.84"
  },
  {
    fullName: "Fredek Dolbey",
    gender: "Male",
    jobTitle: "Biostatistician IV",
    language: "Dutch",
    ssn: "497-75-9511",
    money: "$554.23"
  },
  {
    fullName: "Alia Bellocht",
    gender: "Female",
    jobTitle: "Mechanical Systems Engineer",
    language: "Montenegrin",
    ssn: "553-48-4380",
    money: "$257.99"
  },
  {
    fullName: "Mikael Niblock",
    gender: "Male",
    jobTitle: "Nuclear Power Engineer",
    language: "Kurdish",
    ssn: "270-62-3890",
    money: "$289.19"
  },
  {
    fullName: "Markus Ferroni",
    gender: "Male",
    jobTitle: "Senior Quality Engineer",
    language: "Filipino",
    ssn: "622-11-6575",
    money: "$73.07"
  },
  {
    fullName: "Edd Chismon",
    gender: "Male",
    jobTitle: "Speech Pathologist",
    language: "Lao",
    ssn: "427-45-2376",
    money: "$138.42"
  },
  {
    fullName: "Gregoor Northeast",
    gender: "Male",
    jobTitle: "Software Engineer III",
    language: "Polish",
    ssn: "885-88-5924",
    money: "$845.20"
  },
  {
    fullName: "Effie Maystone",
    gender: "Female",
    jobTitle: "Staff Accountant IV",
    language: "Latvian",
    ssn: "842-23-4886",
    money: "$422.65"
  },
  {
    fullName: "Ethelyn Fonquernie",
    gender: "Female",
    jobTitle: "Dental Hygienist",
    language: "Moldovan",
    ssn: "820-95-7709",
    money: "$416.41"
  },
  {
    fullName: "Rog Sawley",
    gender: "Male",
    jobTitle: "Pharmacist",
    language: "Tok Pisin",
    ssn: "255-46-9667",
    money: "$709.27"
  },
  {
    fullName: "Wit D'Avaux",
    gender: "Male",
    jobTitle: "Geologist I",
    language: "Kazakh",
    ssn: "342-96-6733",
    money: "$171.64"
  },
  {
    fullName: "Kai Mickelwright",
    gender: "Female",
    jobTitle: "Occupational Therapist",
    language: "Estonian",
    ssn: "683-58-6249",
    money: "$564.98"
  },
  {
    fullName: "Eldridge Gomersall",
    gender: "Male",
    jobTitle: "Assistant Media Planner",
    language: "Danish",
    ssn: "356-35-8055",
    money: "$267.60"
  },
  {
    fullName: "Elena Lacaze",
    gender: "Female",
    jobTitle: "Electrical Engineer",
    language: "Lao",
    ssn: "491-25-0153",
    money: "$929.50"
  },
  {
    fullName: "Josselyn Broxup",
    gender: "Female",
    jobTitle: "Environmental Specialist",
    language: "Kyrgyz",
    ssn: "452-67-9094",
    money: "$247.17"
  },
  {
    fullName: "Lena Sales",
    gender: "Female",
    jobTitle: "Payment Adjustment Coordinator",
    language: "Guaraní",
    ssn: "563-22-2230",
    money: "$34.25"
  },
  {
    fullName: "Phillis Juares",
    gender: "Female",
    jobTitle: "Computer Systems Analyst I",
    language: "Danish",
    ssn: "474-34-5271",
    money: "$360.12"
  },
  {
    fullName: "Sadye Robart",
    gender: "Female",
    jobTitle: "Safety Technician IV",
    language: "Greek",
    ssn: "670-94-0573",
    money: "$294.62"
  },
  {
    fullName: "Frederik Gatherer",
    gender: "Male",
    jobTitle: "Professor",
    language: "Assamese",
    ssn: "895-93-7570",
    money: "$310.22"
  },
  {
    fullName: "Kim Stookes",
    gender: "Male",
    jobTitle: "Mechanical Systems Engineer",
    language: "Tswana",
    ssn: "571-63-6938",
    money: "$84.85"
  },
  {
    fullName: "Gail Antoinet",
    gender: "Male",
    jobTitle: "Operator",
    language: "Bulgarian",
    ssn: "421-85-6026",
    money: "$685.67"
  },
  {
    fullName: "Ameline Thickpenny",
    gender: "Female",
    jobTitle: "Recruiting Manager",
    language: "Oriya",
    ssn: "555-31-9393",
    money: "$168.80"
  },
  {
    fullName: "Livvyy Kidstoun",
    gender: "Female",
    jobTitle: "Administrative Assistant I",
    language: "Catalan",
    ssn: "215-33-7201",
    money: "$181.27"
  },
  {
    fullName: "Jesselyn Manchester",
    gender: "Female",
    jobTitle: "Operator",
    language: "Danish",
    ssn: "699-89-8483",
    money: "$668.11"
  },
  {
    fullName: "Cornelius Struan",
    gender: "Male",
    jobTitle: "Help Desk Technician",
    language: "Norwegian",
    ssn: "328-66-9201",
    money: "$667.00"
  },
  {
    fullName: "Mel Stoeck",
    gender: "Male",
    jobTitle: "Programmer Analyst IV",
    language: "English",
    ssn: "326-17-8444",
    money: "$468.05"
  },
  {
    fullName: "Robenia Rotherham",
    gender: "Female",
    jobTitle: "Professor",
    language: "Polish",
    ssn: "651-62-3765",
    money: "$774.52"
  },
  {
    fullName: "Kenton Mustin",
    gender: "Male",
    jobTitle: "Database Administrator II",
    language: "Italian",
    ssn: "454-31-7598",
    money: "$732.34"
  },
  {
    fullName: "Norrie Pembridge",
    gender: "Female",
    jobTitle: "Junior Executive",
    language: "Tswana",
    ssn: "370-98-4046",
    money: "$65.74"
  },
  {
    fullName: "Yuma Swindle",
    gender: "Male",
    jobTitle: "Automation Specialist II",
    language: "Luxembourgish",
    ssn: "309-90-4126",
    money: "$97.19"
  },
  {
    fullName: "Blair Kingaby",
    gender: "Male",
    jobTitle: "Junior Executive",
    language: "Northern Sotho",
    ssn: "135-35-6775",
    money: "$817.58"
  },
  {
    fullName: "Corene Pitway",
    gender: "Female",
    jobTitle: "Mechanical Systems Engineer",
    language: "New Zealand Sign Language",
    ssn: "415-70-9708",
    money: "$582.20"
  },
  {
    fullName: "Evvy Chmiel",
    gender: "Female",
    jobTitle: "Biostatistician I",
    language: "Northern Sotho",
    ssn: "499-23-0675",
    money: "$162.50"
  },
  {
    fullName: "Bree Huett",
    gender: "Female",
    jobTitle: "Sales Associate",
    language: "Estonian",
    ssn: "613-56-0211",
    money: "$954.17"
  },
  {
    fullName: "Terri Lorraine",
    gender: "Male",
    jobTitle: "Graphic Designer",
    language: "Albanian",
    ssn: "441-16-5510",
    money: "$844.21"
  },
  {
    fullName: "Tommi Elven",
    gender: "Female",
    jobTitle: "Data Coordinator",
    language: "Kurdish",
    ssn: "397-87-2502",
    money: "$587.12"
  },
  {
    fullName: "Lanette Shrieve",
    gender: "Female",
    jobTitle: "GIS Technical Architect",
    language: "Swati",
    ssn: "320-74-4329",
    money: "$522.36"
  },
  {
    fullName: "Hadria Barbera",
    gender: "Female",
    jobTitle: "Help Desk Operator",
    language: "Marathi",
    ssn: "161-92-0476",
    money: "$805.35"
  },
  {
    fullName: "Linnell Benson",
    gender: "Female",
    jobTitle: "Information Systems Manager",
    language: "Malay",
    ssn: "135-70-1859",
    money: "$280.36"
  },
  {
    fullName: "Melli Coper",
    gender: "Female",
    jobTitle: "Quality Control Specialist",
    language: "Bosnian",
    ssn: "475-36-5874",
    money: "$264.70"
  },
  {
    fullName: "Cordula Gherardini",
    gender: "Female",
    jobTitle: "Community Outreach Specialist",
    language: "Assamese",
    ssn: "875-44-7846",
    money: "$684.20"
  },
  {
    fullName: "Guthry Billyard",
    gender: "Male",
    jobTitle: "Biostatistician II",
    language: "Tamil",
    ssn: "362-47-1175",
    money: "$385.44"
  },
  {
    fullName: "Myca Dog",
    gender: "Male",
    jobTitle: "Executive Secretary",
    language: "Tswana",
    ssn: "399-73-1058",
    money: "$334.04"
  },
  {
    fullName: "Fay Crippin",
    gender: "Female",
    jobTitle: "Account Representative II",
    language: "Haitian Creole",
    ssn: "669-24-0333",
    money: "$743.52"
  },
  {
    fullName: "Leonardo Cisneros",
    gender: "Male",
    jobTitle: "Structural Analysis Engineer",
    language: "Kannada",
    ssn: "874-39-6408",
    money: "$734.75"
  },
  {
    fullName: "Irma Beche",
    gender: "Female",
    jobTitle: "Tax Accountant",
    language: "Czech",
    ssn: "457-52-6720",
    money: "$991.74"
  }
];

//1. 풀네임에서 A,B,C로 시작되는 사람들만 남기기!
const a1 = data.filter(
  (x) =>
    x.fullName.startsWith("A") ||
    x.fullName.startsWith("B") ||
    x.fullName.startsWith("C")
);
//2.성별이 여성이고, 풀네임이 10글자 이상인 사람만 남기기!
const a2 = data.filter((x) => x.gender == "Femail" && x.fullName.length <= 10);
//3. 직업이 Manager인 사람만 남기고, 풀네임을 이름만 남기기
const a3 = data.map((x) => {
  x.jobTitle == "Manager";
  x.fullName.split(" ")[1];
});
console.log({ a1, a2, a3 });
