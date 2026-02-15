// --- Full Content Engine ---

const subjectsList = [
  { id: 'alifbe', name: 'Alifbe', icon: '🔤' },
  { id: 'yozuv', name: 'Yozuv', icon: '📝' },
  { id: 'oquish', name: 'O\'qish', icon: '📖' },
  { id: 'ona_tili', name: 'Ona tili', icon: '✍️' },
  { id: 'adabiyot', name: 'Adabiyot', icon: '📚' },
  { id: 'matematika', name: 'Matematika', icon: '➗' },
  { id: 'algebra', name: 'Algebra', icon: '🔢' },
  { id: 'geometriya', name: 'Geometriya', icon: '📐' },
  { id: 'atrofimizdagi_olam', name: 'Atrofimizdagi olam', icon: '🌍' },
  { id: 'biologiya', name: 'Biologiya', icon: '🧬' },
  { id: 'fizika', name: 'Fizika', icon: '⚛️' },
  { id: 'kimyo', name: 'Kimyo', icon: '🧪' },
  { id: 'informatika', name: 'Informatika', icon: '💻' },
  { id: 'tarix_uzb', name: 'O\'zbekiston tarixi', icon: '🏛️' },
  { id: 'tarix_jahon', name: 'Jahon tarixi', icon: '🌎' },
  { id: 'astronomiya', name: 'Astronomiya', icon: '🔭' },
  { id: 'din_tarixi', name: 'Din tarixi', icon: '📜' },
  { id: 'huquq_asoslari', name: 'Davlat va huquq asoslari', icon: '⚖️' },
  { id: 'iqtisod', name: 'Iqtisodiy bilim asoslari', icon: '📊' },
  { id: 'ingliz_tili', name: 'Ingliz tili', icon: '🇬🇧' },
  { id: 'rus_tili', name: 'Rus tili', icon: '🇷🇺' },
  { id: 'fransuz_tili', name: 'Fransuz tili', icon: '🇫🇷' },
  { id: 'nemis_tili', name: 'Nemis tili', icon: '🇩🇪' },
  { id: 'tarbiya', name: 'Tarbiya', icon: '🤝' },
  { id: 'geografiya', name: 'Geografiya', icon: '🗺️' },
  { id: 'chizmachilik', name: 'Chizmachilik', icon: '📏' },
  { id: 'musiqa', name: 'Musiqa madaniyati', icon: '🎵' },
  { id: 'sanat', name: 'Tasviriy san\'at', icon: '🎨' },
  { id: 'texnologiya', name: 'Texnologiya', icon: '🛠️' },
  { id: 'jismoniy_tarbiya', name: 'Jismoniy tarbiya', icon: '🏃' }
];

const gradeSubjectsMap = {
  1: ['alifbe', 'yozuv', 'oquish', 'ona_tili', 'matematika', 'biologiya', 'ingliz_tili', 'tarbiya', 'sanat', 'musiqa', 'texnologiya', 'informatika', 'jismoniy_tarbiya'],
  2: ['oquish', 'ona_tili', 'matematika', 'atrofimizdagi_olam', 'ingliz_tili', 'tarbiya', 'sanat', 'musiqa', 'texnologiya', 'jismoniy_tarbiya'],
  3: ['oquish', 'ona_tili', 'matematika', 'atrofimizdagi_olam', 'ingliz_tili', 'tarbiya', 'sanat', 'musiqa', 'texnologiya', 'jismoniy_tarbiya'],
  4: ['oquish', 'ona_tili', 'matematika', 'atrofimizdagi_olam', 'ingliz_tili', 'tarbiya', 'sanat', 'musiqa', 'texnologiya', 'jismoniy_tarbiya'],
  5: ['ona_tili', 'adabiyot', 'matematika', 'ingliz_tili', 'rus_tili', 'biologiya', 'informatika', 'tarix_uzb', 'geografiya', 'tarbiya', 'musiqa', 'sanat', 'texnologiya', 'jismoniy_tarbiya'],
  6: ['ona_tili', 'adabiyot', 'matematika', 'ingliz_tili', 'rus_tili', 'biologiya', 'informatika', 'tarix_uzb', 'tarix_jahon', 'geografiya', 'tarbiya', 'musiqa', 'sanat', 'texnologiya', 'jismoniy_tarbiya'],
  7: ['ona_tili', 'adabiyot', 'algebra', 'geometriya', 'ingliz_tili', 'rus_tili', 'fizika', 'kimyo', 'biologiya', 'informatika', 'tarix_uzb', 'tarix_jahon', 'geografiya', 'tarbiya', 'musiqa', 'sanat', 'texnologiya', 'chizmachilik', 'jismoniy_tarbiya'],
  8: ['ona_tili', 'adabiyot', 'algebra', 'geometriya', 'ingliz_tili', 'rus_tili', 'fizika', 'kimyo', 'biologiya', 'informatika', 'tarix_uzb', 'tarix_jahon', 'geografiya', 'huquq_asoslari', 'iqtisod', 'tarbiya', 'texnologiya', 'chizmachilik', 'jismoniy_tarbiya'],
  9: ['ona_tili', 'adabiyot', 'algebra', 'geometriya', 'ingliz_tili', 'rus_tili', 'fizika', 'kimyo', 'biologiya', 'informatika', 'tarix_uzb', 'tarix_jahon', 'geografiya', 'huquq_asoslari', 'iqtisod', 'tarbiya', 'texnologiya', 'chizmachilik', 'jismoniy_tarbiya'],
  10: ['ona_tili', 'adabiyot', 'algebra', 'geometriya', 'ingliz_tili', 'rus_tili', 'fransuz_tili', 'nemis_tili', 'fizika', 'kimyo', 'biologiya', 'informatika', 'tarix_uzb', 'tarix_jahon', 'geografiya', 'astronomiya', 'huquq_asoslari', 'iqtisod', 'tarbiya', 'texnologiya', 'chizmachilik', 'jismoniy_tarbiya'],
  11: ['matematika', 'ona_tili', 'fizika', 'kimyo', 'tarix_uzb', 'tarix_jahon', 'informatika', 'iqtisod', 'tarbiya', 'ingliz_tili', 'rus_tili', 'din_tarixi']
};

const gradePDFLinksMap = {
  1: {
    'alifbe': [{ title: 'Alifbe', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Oqish-savodxonligi-1-qism.pdf' }],
    'yozuv': [{ title: 'Yozuv daftari (2-qism)', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-yozuv-daftari-2-qism.pdf' }],
    'oquish': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Oqish-savodxonligi-1-qism.pdf' }, { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Oqish-savodxonligi-2-qism.pdf' }],
    'ona_tili': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Ona-tili-1-qism.pdf' }, { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Ona-tili-2-qism.pdf' }],
    'matematika': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Matematika-1-qism.pdf' }, { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Matematika-2-qism.pdf' }, { title: '3-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Matematika-3-qism.pdf' }, { title: '4-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Matematika-4-qism.pdf' }],
    'biologiya': [{ title: 'Tabiiy fanlar', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Tabiiy-fanlar-2-qism.pdf' }],
    'ingliz_tili': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Ingliz-tili.pdf' }],
    'tarbiya': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Tarbiya.pdf' }],
    'sanat': [{ title: 'Tasviriy san’at', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Tasviriy-sanat.pdf' }],
    'musiqa': [{ title: 'Musiqa', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Musiqiy-savodxonli.pdf' }],
    'texnologiya': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Texnalogiya.pdf' }],
    'informatika': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1_sinf_Informatika_va_axborot_texnologiyalar.pdf' }],
    'jismoniy_tarbiya': [{ title: 'Ish daftari', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/1-sinf-Jismoniy-tarbiya-Ish-daftar.pdf' }]
  },
  2: {
    'oquish': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/2-sinf-Oqish-savodxonligi-1-qism-1.pdf' }, { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/2-sinf-Oqish-savodxonligi-2-qism.pdf' }],
    'ona_tili': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/2-sinf-Ona-tili-1-qism.pdf' }, { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/2-sinf-Ona-tili-2-qism.pdf' }],
    'matematika': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/2-sinf-Matematika-1-qism.pdf' }, { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/2-sinf-Matematika-2-qism.pdf' }],
    'biologiya': [{ title: 'Tabiiy fanlar', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/2-sinf-Tabiy-fanlar-1-qism.pdf' }],
    'ingliz_tili': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/2-sinf-Ingliz-tili.pdf' }],
    'informatika': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/2-sinf-informatika-2024.pdf' }],
    'tarbiya': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/2-sinf-Tarbiya.pdf' }],
    'sanat': [{ title: 'Tasviriy san’at', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/2-sinf-Tasviriy-sanat.pdf' }],
    'texnologiya': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/2-sinf-Texnalogiya.pdf' }]
  },
  3: {
    'matematika': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/3-sinf-Matematika-1-qism.pdf' }, { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/3-sinf-Matematika-2-qism.pdf' }],
    'oquish': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/3-sinf-Oqish-savodxonligi-1-qism.pdf' }, { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/3-sinf-Oqish-savodxonligi-2-qism.pdf' }],
    'ona_tili': [{ title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/3-sinf-Ona-tili-2-qism.pdf' }],
    'biologiya': [{ title: 'Tabiiy fanlar', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/3-sinf-Tabiiy-fanlar-1-qism-.pdf' }],
    'ingliz_tili': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/3-Sinf-English.pdf' }],
    'tarbiya': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/3-sinf-Tarbiya.pdf' }],
    'sanat': [{ title: 'Tasviriy san’at', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/3-sinf-Tasviriy-sanat.pdf' }],
    'texnologiya': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/3-sinf-Texnologiya.pdf' }]
  },
  4: {
    'matematika': [{ title: '3-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/4-sinf-Matematika-3-qism.pdf' }, { title: '4-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/4-sinf-Matematika-4-qism.pdf' }],
    'oquish': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/4-sinf-Oqish-savodxonligi-1-qism.pdf' }, { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/4-sinf-Oqish-savodxonligi-2-qism.pdf' }],
    'biologiya': [{ title: 'Tabiiy fanlar', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/4-sinf-Tabiiy-fanlar-1-qism.pdf' }],
    'ona_tili': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/4-sinf-Ona-tili-1-qism.pdf' }],
    'tarbiya': [{ title: 'Tarbiya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/4-sinf-Tarbiya.pdf' }],
    'texnologiya': [{ title: 'Texnologiya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/4-sinf-Texnologiya.pdf' }],
    'sanat': [{ title: 'Tasviriy san’at', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/4-sinf-Tasviriy-sanat.pdf' }]
  },
  5: {
    'matematika': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Matematika-5-sinf-1-qism.pdf' }, { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Matematika-5-sinf-2-qism.pdf' }],
    'ona_tili': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ona-tili-5-sinf.pdf' }],
    'adabiyot': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Adabiyot-5-sinf.pdf' }],
    'biologiya': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Biologiya-5-sinf.pdf' }],
    'geografiya': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Geografiya-5-sinf.pdf' }],
    'tarix_uzb': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Tarixdan-hikoyalar-5-sinf.pdf' }],
    'ingliz_tili': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ingliz-tili-5-sinf.pdf' }],
    'informatika': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Informatika-5-sinf.pdf' }]
  },
  6: {
    'biologiya': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Botanika-6-sinf.pdf' }],
    'fizika': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Fizika-6-sinf.pdf' }],
    'ona_tili': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ona-tili-6-sinf.pdf' }],
    'adabiyot': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Adabiyot-6-sinf-1-qism.pdf' }, { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Adabiyot-6-sinf-2-qism.pdf' }],
    'geografiya': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Geografiya-6-sinf.pdf' }],
    'tarix_uzb': [{ title: 'Tarix', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Tarix-6-sinf.pdf' }],
    'informatika': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Informatika-6-sinf.pdf' }]
  },
  7: {
    'algebra': [{ title: 'Algebra', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Algebra-7-sinf.pdf' }],
    'geometriya': [{ title: 'Geometriya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Geometriya-7-sinf.pdf' }],
    'fizika': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Fizika-7-sinf.pdf' }],
    'biologiya': [{ title: 'Zoologiya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Biologiya-Zoologiya-7-sinf.pdf' }],
    'ona_tili': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ona-tili-7-sinf.pdf' }],
    'adabiyot': [{ title: 'Adabiyot', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Adabiyot-7-sinf.pdf' }],
    'tarix_uzb': [{ title: 'O\'zbekiston tarixi', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ozbekiston-tarixi-7-sinf.pdf' }],
    'tarix_jahon': [{ title: 'Jahon tarixi', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Jahon-tarixi-7-sinf.pdf' }],
    'ingliz_tili': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ingliz-tili-7-sinf.pdf' }],
    'informatika': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Informatika-7-sinf.pdf' }],
    'geografiya': [{ title: 'Geografiya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Geografiya-7-sinf.pdf' }],
    'texnologiya': [{ title: 'Texnologiya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Texnologiya-7-sinf.pdf' }]
  },
  8: {
    'algebra': [{ title: 'Algebra', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Geometriya-8-sinf.pdf' }],
    'geometriya': [{ title: 'Geometriya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Geometriya-8-sinf.pdf' }],
    'fizika': [{ title: 'Fizika', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Fizika-8-sinf.pdf' }],
    'kimyo': [{ title: 'Kimyo', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Kimyo-8-sinf.pdf' }],
    'biologiya': [{ title: 'Biologiya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Biologiya-8-sinf.pdf' }],
    'adabiyot': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Adabiyot1-qism-8-sinf-.pdf' }, { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Adabiyot2-qism-8-sinf-.pdf' }],
    'geografiya': [{ title: 'Geografiya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Geografiya-8-sinf.pdf' }],
    'tarix_uzb': [{ title: 'O\'zbekiston tarixi', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ozbekiston-tarixi-8-sinf.pdf' }],
    'tarix_jahon': [{ title: 'Jahon tarixi', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Jahon-tarixi-8-sinf.pdf' }],
    'ingliz_tili': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ingliz-tili-8-sinf.pdf' }],
    'informatika': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Informatika-8-sinf.pdf' }],
    'iqtisod': [{ title: 'Iqtisodiy bilim asoslari', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Iqtisodiy-bilim-asoslari-8-sinf.pdf' }],
    'huquq_asoslari': [{ title: 'Davlat va huquq', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ozbekiston-Davlat-va-Huquq-asoslari-8.pdf' }],
    'chizmachilik': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Chizmachilik-8-sinf.pdf' }]
  },
  9: {
    'algebra': [{ title: 'Algebra', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Algebra-9-sinf.pdf' }],
    'geometriya': [{ title: 'Geometriya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Geometriya-9-sinf.pdf' }],
    'fizika': [{ title: 'Fizika', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Fizika-9-sinf.pdf' }],
    'kimyo': [{ title: 'Kimyo', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Kimyo-9-sinf.pdf' }],
    'biologiya': [{ title: 'Biologiya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Biologiya-9-sinf.pdf' }],
    'ona_tili': [{ title: 'Yangi darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ona-tili-darslik-yangi9-sinf-.pdf' }],
    'geografiya': [{ title: 'Geografiya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Geografiya-9-sinf.pdf' }],
    'tarix_jahon': [{ title: 'Jahon tarixi', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Jahon-tarixi-9-sinf.pdf' }],
    'informatika': [{ title: 'Informatika', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Informatika-9-sinf.pdf' }],
    'huquq_asoslari': [{ title: 'Davlat va huquq', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Konstitutsiyaviy-huquq-asoslari-9.pdf' }],
    'texnologiya': [{ title: 'Texnologiya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Mehnat-talimi.pdf' }]
  },
  10: {
    'matematika': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Matematika-10-sinf-1-qism.pdf' }, { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Matematika-10-sinf2-qism.pdf' }],
    'ona_tili': [{ title: 'Ona tili', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ona-tili-10-sinf.pdf' }],
    'adabiyot': [{ title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Adabiyot-10-sinf-1-qism.pdf' }, { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Adabiyot-10-sinf-2-qism.pdf' }],
    'fizika': [{ title: 'Fizika', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Fizika-10-sinf.pdf' }],
    'kimyo': [{ title: 'Kimyo', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Kimyo-10-sinf.pdf' }],
    'biologiya': [{ title: 'Biologiya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Biologiya-10-sinf.pdf' }],
    'tarix_uzb': [{ title: 'O’zbekiston tarixi', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ozbekiston-tarixi-10-sinf.pdf' }],
    'tarix_jahon': [{ title: 'Jahon tarixi', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Jahon-tarixi-10-sinf.pdf' }],
    'informatika': [{ title: 'Cambridge', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/10-11-sinf-Informatika-Cambrige.pdf' }],
    'astronomiya': [{ title: 'Astronomiya', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Dunyo-dinlari-tarixi.pdf' }], // Reusing link or similar
    'din_tarixi': [{ title: 'Dinlar tarixi', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/DUNYO-DINLARI-TARIXI.pdf' }]
  },
  11: {
    'matematika': [
      { title: '1-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Matematika-11-sinf-1-qism.pdf' },
      { title: '2-qism', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Matematika-11-sinf2-qism.pdf' }
    ],
    'ona_tili': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ona-tili-11-sinf.pdf' }],
    'fizika': [{ title: 'Fizika', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Fizika-11-sinf.pdf' }],
    'kimyo': [
      { title: 'Kimyo', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Kimyo-11-sinf.pdf' },
      { title: 'Umumiy kimyo', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Umumiy-kimyo.pdf' }
    ],
    'tarix_uzb': [{ title: 'O\'zbekiston tarixi', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ozbekiston-tarixi11-sinf.pdf' }],
    'tarix_jahon': [{ title: 'Jahon tarixi', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Jahon-tarixi-11-sinf.pdf' }],
    'informatika': [{ title: 'Informatika', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Informatika-11-sinf.pdf' }],
    'iqtisod': [{ title: 'Tadbirkorlik asoslari', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Tadbirkorlik-asoslari-11-sinf.pdf' }],
    'tarbiya': [{ title: 'Ma\'naviyat asoslari', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Manaviyat-asoslari11-sinf.pdf' }],
    'ingliz_tili': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Ingliz-tili-11-sinf.pdf' }],
    'rus_tili': [{ title: 'Darslik', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Rus-tili-11-sinf.pdf' }],
    'din_tarixi': [{ title: 'Din tarixi', url: 'https://bilimmarkazi.uz/wp-content/uploads/2025/07/Din-tarixi11-sinf.pdf' }]
  }
};

// Optimization for slow DNS/Network
const dnsPrefetch = document.createElement('link');
dnsPrefetch.rel = 'dns-prefetch';
dnsPrefetch.href = 'https://bilimmarkazi.uz';
document.head.appendChild(dnsPrefetch);

const preConnect = document.createElement('link');
preConnect.rel = 'preconnect';
preConnect.href = 'https://bilimmarkazi.uz';
preConnect.crossOrigin = 'anonymous';
document.head.appendChild(preConnect);

const subjectTopics = {
  biologiya: ["Inson anatomiyasi", "Hujayra genetikasi", "Modda almashinuvi", "Ekomuhit muhofazasi"],
  matematika: ["Integral va uning tatbiqlari", "Kombinatorika", "Ehtimollik", "Matematik tahlil"],
  ona_tili: ["Nutq uslublari", "Imlo va punktuatsiya", "Muloqot madaniyati", "Rasmiy hujjatlar"],
  adabiyot: ["Jadid adabiyoti", "Shuhrat ijodi", "O'zbek romanchiligi", "Jaxon adabiyoti"],
  tarix_uzb: ["Mustaqillik yillari", "Yangi milliy davlatchilik", "Islohotlar unumi", "Bugungi O'zbekiston"],
  fizika: ["Kvant fizikasi", "Atom strukturasi", "Yadro energiyasi", "Koinot sirlari"]
};

const alphabetData = {
  en: { A: "[ei]", B: "[bi]", C: "[si]", D: "[di]", E: "[i]", F: "[ef]", G: "[ji]", H: "[eich]", I: "[ai]", J: "[jei]", K: "[kei]", L: "[el]", M: "[em]", N: "[en]", O: "[ou]", P: "[pi]", Q: "[kju]", R: "[ar]", S: "[es]", T: "[ti]", U: "[ju]", V: "[vi]", W: "[dabl-ju]", X: "[eks]", Y: "[wai]", Z: "[zed]" },
  ru: { А: "[a]", Б: "[be]", В: "[ve]", Г: "[ge]", Д: "[de]", Е: "[ye]", Ё: "[yo]", Ж: "[je]", З: "[ze]", И: "[i]", Й: "[iy]", К: "[ka]", Л: "[el]", М: "[em]", Н: "[en]", О: "[o]", П: "[pe]", Р: "[er]", С: "[es]", Т: "[te]", У: "[u]", Ф: "[ef]", Х: "[xa]", Ц: "[tse]", Ч: "[che]", Ш: "[sha]", Щ: "[sha]", Э: "[e]", Ю: "[yu]", Я: "[ya]" },
  ar: { "ا": "[alif]", "ب": "[ba]", "ت": "[ta]", "ث": "[sa]", "ج": "[jim]", "ح": "[ha]", "خ": "[xo]", "د": "[dal]", "ذ": "[zal]", "ر": "[ro]", "ز": "[za]", "س": "[sin]", "ش": "[shin]", "ص": "[sod]", "ض": "[dod]", "ط": "[to]", "ظ": "[zo]", "ع": "[ayn]", "غ": "[g'ayn]", "ف": "[fa]", "ق": "[qof]", "ك": "[kaf]", "ل": "[lam]", "م": "[mim]", "ن": "[nun]", "ه": "[ha]", "و": "[vav]", "ي": "[ya]" }
};

// Rich vocabulary with distinct entries for each level
const vocabData = {
  en: {
    beg: [
      { w: 'Apple', t: 'Olma', p: '[ˈæpl]' }, { w: 'Banana', t: 'Banan', p: '[bəˈnænə]' }, { w: 'Car', t: 'Mashina', p: '[kɑːr]' }, { w: 'Dog', t: 'It', p: '[dɔːɡ]' },
      { w: 'Elephant', t: 'Fil', p: '[ˈelɪfənt]' }, { w: 'Flower', t: 'Gul', p: '[ˈflaʊər]' }, { w: 'Guitar', t: 'Gitara', p: '[ɡɪˈtɑːr]' }, { w: 'House', t: 'Uy', p: '[haʊs]' },
      { w: 'Ice', t: 'Muz', p: '[aɪs]' }, { w: 'Jacket', t: 'Kurtka', p: '[ˈdʒækɪt]' }, { w: 'Kite', t: 'Varrak', p: '[kaɪt]' }, { w: 'Lamp', t: 'Chiroq', p: '[læmp]' },
      { w: 'Moon', t: 'Oy', p: '[muːn]' }, { w: 'Nest', t: 'Uya', p: '[nest]' }, { w: 'Orange', t: 'Apelsin', p: '[ˈɔːrɪndʒ]' }, { w: 'Pen', t: 'Ruchka', p: '[pen]' },
      { w: 'Queen', t: 'Qirolicha', p: '[kwiːn]' }, { w: 'Rabbit', t: 'Quyon', p: '[ˈræbɪt]' }, { w: 'Sun', t: 'Quyosh', p: '[sʌn]' }, { w: 'Tree', t: 'Daraxt', p: '[triː]' },
      { w: 'Umbrella', t: 'Soyabon', p: '[ʌmˈbrelə]' }, { w: 'Van', t: 'Furgon', p: '[væn]' }, { w: 'Water', t: 'Suv', p: '[ˈwɔːtər]' }, { w: 'Xylophone', t: 'Ksilofon', p: '[ˈzaɪləfəʊn]' },
      { w: 'Yacht', t: 'Yaxta', p: '[jɒt]' }, { w: 'Zebra', t: 'Zebra', p: '[ˈzebrə]' }, { w: 'Ball', t: 'Koptok', p: '[bɔːl]' }, { w: 'Cat', t: 'Mushuk', p: '[kæt]' },
      { w: 'Desk', t: 'Parta', p: '[desk]' }, { w: 'Egg', t: 'Tuxum', p: '[eɡ]' }, { w: 'Fan', t: 'Ventilyator', p: '[fæn]' }, { w: 'Goat', t: 'Echki', p: '[ɡəʊt]' }
    ],
    mid: [
      { w: 'Adventure', t: 'Sarguzasht', p: '[ədˈventʃər]' }, { w: 'Beautiful', t: 'Chiroyli', p: '[ˈbjuːtɪfl]' }, { w: 'Challenge', t: 'Qiyinchilik', p: '[ˈtʃælɪndʒ]' },
      { w: 'Discover', t: 'Kashf qilmoq', p: '[dɪˈskʌvər]' }, { w: 'Energy', t: 'Energiya', p: '[ˈenərdʒi]' }, { w: 'Freedom', t: 'Ozodlik', p: '[ˈfriːdəm]' },
      { w: 'Galaxy', t: 'Galaktika', p: '[ˈɡæləksi]' }, { w: 'History', t: 'Tarix', p: '[ˈhɪstri]' }, { w: 'Imagine', t: 'Tasavvur qilmoq', p: '[ɪˈmædʒɪn]' },
      { w: 'Journey', t: 'Sayohat', p: '[ˈdʒɜːrni]' }, { w: 'Knowledge', t: 'Bilim', p: '[ˈnɒlɪdʒ]' }, { w: 'Library', t: 'Kutubxona', p: '[ˈlaɪbrəri]' },
      { w: 'Mountain', t: 'Tog‘', p: '[ˈmaʊntɪn]' }, { w: 'Nature', t: 'Tabiat', p: '[ˈneɪtʃər]' }, { w: 'Ocean', t: 'Okean', p: '[ˈəʊʃn]' }, { w: 'Planet', t: 'Sayyora', p: '[ˈplænɪt]' },
      { w: 'Quiet', t: 'Tinch', p: '[ˈkwaɪət]' }, { w: 'Respect', t: 'Hurmat', p: '[rɪˈspekt]' }, { w: 'Science', t: 'Fan', p: '[ˈsaɪəns]' }, { w: 'Travel', t: 'Sayohat', p: '[ˈtrævl]' },
      { w: 'Universe', t: 'Koinot', p: '[ˈjuːnɪvɜːrs]' }, { w: 'Victory', t: 'G‘alaba', p: '[ˈvɪktəri]' }, { w: 'Weather', t: 'Ob-havo', p: '[ˈweðər]' }
    ],
    adv: [
      { w: 'Achievement', t: 'Yutuq', p: '[əˈtʃiːvmənt]' }, { w: 'Brilliant', t: 'Juda aqlli', p: '[ˈbrɪliənt]' }, { w: 'Collaboration', t: 'Hamkorlik', p: '[kəˌlæbəˈreɪʃn]' },
      { w: 'Determination', t: 'Qat’iyat', p: '[dɪˌtɜːrmɪˈneɪʃn]' }, { w: 'Environment', t: 'Atrof-muhit', p: '[ɪnˈvaɪrənmənt]' }, { w: 'Fascinating', t: 'Maftunkor', p: '[ˈfæsɪneɪtɪŋ]' },
      { w: 'Globalization', t: 'Globallashuv', p: '[ˌɡləʊbəlaɪˈzeɪʃn]' }, { w: 'Hypothesis', t: 'Faraz', p: '[haɪˈpɒθəsɪs]' }, { w: 'Innovation', t: 'Innovatsiya', p: '[ˌɪnəˈveɪʃn]' },
      { w: 'Justification', t: 'Asoslash', p: '[ˌdʒʌstɪfɪˈkeɪʃn]' }, { w: 'Kinetic', t: 'Harakatdagi', p: '[kɪˈnetɪk]' }, { w: 'Legislature', t: 'Qonunchilik', p: '[ˈledʒɪsleɪtʃər]' },
      { w: 'Magnificent', t: 'Muhtasham', p: '[mæɡˈnɪfɪsnt]' }, { w: 'Negotiation', t: 'Muzokara', p: '[nɪˌɡəʊʃiˈeɪʃn]' }, { w: 'Opportunity', t: 'Imkoniyat', p: '[ˌɒpərˈtuːnəti]' },
      { w: 'Philosophy', t: 'Falsafa', p: '[fəˈlɒsəfi]' }, { w: 'Qualification', t: 'Malaka', p: '[ˌkwɒlɪfɪˈkeɪʃn]' }, { w: 'Revolution', t: 'Inqilob', p: '[ˌrevəˈluːʃn]' },
      { w: 'Significance', t: 'Ahamiyat', p: '[sɪɡˈnɪfɪkəns]' }, { w: 'Technology', t: 'Texnologiya', p: '[tekˈnɒlədʒi]' }
    ]
  },
  ru: {
    beg: [
      { w: 'Арбуз', t: 'Tarvuz', p: '[Arbuz]' }, { w: 'Белка', t: 'Olmaxon', p: '[Belka]' }, { w: 'Ветер', t: 'Shamol', p: '[Veter]' }, { w: 'Город', t: 'Shahar', p: '[Gorod]' },
      { w: 'Дом', t: 'Uy', p: '[Dom]' }, { w: 'Еда', t: 'Ovqat', p: '[Yeda]' }, { w: 'Ёж', t: 'Tipratikan', p: '[Yoj]' }, { w: 'Жираф', t: 'Jirafa', p: '[Jiraf]' },
      { w: 'Зима', t: 'Qish', p: '[Zima]' }, { w: 'Игра', t: 'O‘yin', p: '[Igra]' }, { w: 'Кот', t: 'Mushuk', p: '[Kot]' }, { w: 'Лев', t: 'Sher', p: '[Lev]' },
      { w: 'Мама', t: 'Ona', p: '[Mama]' }, { w: 'Нос', t: 'Burun', p: '[Nos]' }, { w: 'Окно', t: 'Deraza', p: '[Okno]' }, { w: 'Папа', t: 'Ota', p: '[Papa]' },
      { w: 'Рука', t: 'Qo‘l', p: '[Ruka]' }, { w: 'Сон', t: 'Uyqu', p: '[Son]' }, { w: 'Торт', t: 'Tort', p: '[Tort]' }, { w: 'Ухо', t: 'Quloq', p: '[Uxo]' },
      { w: 'Флаг', t: 'Bayroq', p: '[Flag]' }, { w: 'Хлеб', t: 'Non', p: '[Xleb]' }, { w: 'Цвет', t: 'Rang', p: '[Tsvet]' }, { w: 'Часы', t: 'Soat', p: '[Chasy]' },
      { w: 'Шар', t: 'Shar', p: '[Shar]' }, { w: 'Щит', t: 'Qalqon', p: '[Shchit]' }, { w: 'Эхо', t: 'Aks sado', p: '[Exo]' }, { w: 'Юбка', t: 'Yubka', p: '[Yubka]' }
    ],
    mid: [
      { w: 'Автомобиль', t: 'Avtomobil', p: '[Avtomobil]' }, { w: 'Библиотека', t: 'Kutubxona', p: '[Biblioteka]' }, { w: 'Вокзал', t: 'Vokzal', p: '[Vokzal]' },
      { w: 'Газета', t: 'Gazeta', p: '[Gazeta]' }, { w: 'Деревня', t: 'Qishloq', p: '[Derevnya]' }, { w: 'Журнал', t: 'Jurnal', p: '[Jurnal]' },
      { w: 'Зеркало', t: 'Ko‘zgu', p: '[Zerkalo]' }, { w: 'Инструмент', t: 'Asbob', p: '[Instrument]' }, { w: 'Компьютер', t: 'Kompyuter', p: '[Kompyuter]' },
      { w: 'Лекарство', t: 'Dori', p: '[Lekarstvo]' }, { w: 'Магазин', t: 'Do‘kon', p: '[Magazin]' }, { w: 'Неделя', t: 'Hafta', p: '[Nedelya]' },
      { w: 'Обувь', t: 'Oyoq kiyim', p: '[Obuv]' }, { w: 'Погода', t: 'Ob-havo', p: '[Pogoda]' }, { w: 'Работа', t: 'Ish', p: '[Rabota]' },
      { w: 'Солнце', t: 'Quyosh', p: '[Solntse]' }, { w: 'Телефон', t: 'Telefon', p: '[Telefon]' }, { w: 'Улица', t: 'Ko‘cha', p: '[Ulitsa]' }
    ],
    adv: [
      { w: 'Архитектура', t: 'Arxitektura', p: '[Arxitektura]' }, { w: 'Безопасность', t: 'Xavfsizlik', p: '[Bezopasnost]' }, { w: 'Вдохновение', t: 'Ilhom', p: '[Vdoxnoveniye]' },
      { w: 'Государство', t: 'Davlat', p: '[Gosudarstvo]' }, { w: 'Достопримечательность', t: 'Diqqatga sazovor joy', p: '[Dostoprimechatelnost]' },
      { w: 'Естествознание', t: 'Tabiatshunoslik', p: '[Yestestvoznaniye]' }, { w: 'Жизнедеятельность', t: 'Hayot faoliyati', p: '[Jiznedeyatelnost]' },
      { w: 'Законодательство', t: 'Qonunchilik', p: '[Zakonodatelstvo]' }, { w: 'Искусство', t: 'San’at', p: '[Iskusstvo]' }, { w: 'Космонавтика', t: 'Kosmonavtika', p: '[Kosmonavtika]' },
      { w: 'Литература', t: 'Adabiyot', p: '[Literatura]' }, { w: 'Математика', t: 'Matematika', p: '[Matematika]' }, { w: 'Образование', t: 'Ta\'lim', p: '[Obrazovaniye]' },
      { w: 'Промышленность', t: 'Sanoat', p: '[Promyshlennost]' }, { w: 'Развитие', t: 'Rivojlanish', p: '[Razvitiye]' }
    ]
  },
  ar: {
    beg: [
      { w: 'أَبٌ', t: 'Ota', p: '[Ab]' }, { w: 'أُمٌّ', t: 'Ona', p: '[Umm]' }, { w: 'أَخٌ', t: 'Aka', p: '[Ax]' }, { w: 'أُخْتٌ', t: 'Opa', p: '[Uxt]' },
      { w: 'بَيْتٌ', t: 'Uy', p: '[Bayt]' }, { w: 'بَابٌ', t: 'Eshik', p: '[Bob]' }, { w: 'تُفَّاحٌ', t: 'Olma', p: '[Tuffah]' }, { w: 'ثَوْبٌ', t: 'Kiyim', p: '[Savb]' },
      { w: 'جَمَلٌ', t: 'Tuya', p: '[Jamal]' }, { w: 'حِصَانٌ', t: 'Ot', p: '[Hison]' }, { w: 'خُبْزٌ', t: 'Non', p: '[Xubz]' }, { w: 'دَفْتَرٌ', t: 'Daftar', p: '[Daftar]' },
      { w: 'ذَهَبٌ', t: 'Oltin', p: '[Zahab]' }, { w: 'رَجُلٌ', t: 'Erkak', p: '[Rajul]' }, { w: 'زَهْرَةٌ', t: 'Gul', p: '[Zahra]' }, { w: 'سَاعَةٌ', t: 'Soat', p: '[Sa\'a]' },
      { w: 'شَمْسٌ', t: 'Quyosh', p: '[Shams]' }, { w: 'صَادِقٌ', t: 'Rostgo‘y', p: '[Sodiq]' }, { w: 'طَالِبٌ', t: 'Talaba', p: '[Tolib]' }, { w: 'ظَرْفٌ', t: 'Konvert', p: '[Zarf]' },
      { w: 'عَيْنٌ', t: 'Ko‘z', p: '[Ayn]' }, { w: 'غُرْفَةٌ', t: 'Xona', p: '[G\'urfa]' }, { w: 'فَمٌ', t: 'Og‘iz', p: '[Fam]' }, { w: 'قَلَمٌ', t: 'Qalam', p: '[Qalam]' },
      { w: 'كِتَابٌ', t: 'Kitob', p: '[Kitab]' }, { w: 'لَحْمٌ', t: 'Go‘sht', p: '[Lahm]' }, { w: 'مَاءٌ', t: 'Suv', p: '[Ma\']' }, { w: 'نَجْمٌ', t: 'Yulduz', p: '[Najm]' },
      { w: 'وَلَدٌ', t: 'Bola', p: '[Walad]' }, { w: 'يَدٌ', t: 'Qo‘l', p: '[Yad]' }
    ],
    mid: [
      { w: 'مَدْرَسَةٌ', t: 'Maktab', p: '[Madrasa]' }, { w: 'مُعَلِّمٌ', t: 'O‘qituvchi', p: '[Muallim]' }, { w: 'طَبِيبٌ', t: 'Shifokor', p: '[Tabib]' },
      { w: 'مُهَنْدِسٌ', t: 'Muhandis', p: '[Muhandis]' }, { w: 'حَدِيقَةٌ', t: 'Bog‘', p: '[Hadiqa]' }, { w: 'مَطْبَخٌ', t: 'Oshxona', p: '[Matbax]' },
      { w: 'مَكْتَبَةٌ', t: 'Kutubxona', p: '[Maktaba]' }, { w: 'مَسْجِدٌ', t: 'Masjid', p: '[Masjid]' }, { w: 'سَيَّارَةٌ', t: 'Mashina', p: '[Sayyara]' },
      { w: 'طَائِرَةٌ', t: 'Samolyot', p: '[Toira]' }, { w: 'قِطَارٌ', t: 'Poyezd', p: '[Qitor]' }, { w: 'سَفِينَةٌ', t: 'Kema', p: '[Safina]' },
      { w: 'صُورَةٌ', t: 'Rasm', p: '[Sura]' }, { w: 'كُرْسِيٌّ', t: 'Stul', p: '[Kursiy]' }, { w: 'طَاوِلَةٌ', t: 'Stol', p: '[Tovila]' },
      { w: 'نَافِذَةٌ', t: 'Deraza', p: '[Nafiza]' }, { w: 'مِرْآةٌ', t: 'Ko‘zgu', p: '[Mir\'a]' }, { w: 'هَاتِفٌ', t: 'Telefon', p: '[Hatif]' }
    ],
    adv: [
      { w: 'جَامِعَةٌ', t: 'Universitet', p: '[Jami\'a]' }, { w: 'اقْتِصَادٌ', t: 'Iqtisod', p: '[Iqtisod]' }, { w: 'سِيَاسَةٌ', t: 'Siyosat', p: '[Siyasa]' },
      { w: 'ثَقَافَةٌ', t: 'Madaniyat', p: '[Saqafa]' }, { w: 'تَكْنُولُوجِيَا', t: 'Texnologiya', p: '[Teknoloja]' }, { w: 'دِيمُقْرَاطِيَّةٌ', t: 'Demokratiya', p: '[Dimuqratiya]' },
      { w: 'حُرِّيَّةٌ', t: 'Ozodlik', p: '[Hurriya]' }, { w: 'عَدَالَةٌ', t: 'Adolat', p: '[Adala]' }, { w: 'تَارِيخٌ', t: 'Tarix', p: '[Tarix]' },
      { w: 'جُغْرَافِيَا', t: 'Geografiya', p: '[Jug\'rafiya]' }, { w: 'فَلْسَفَةٌ', t: 'Falsafa', p: '[Falsafa]' }, { w: 'عِلْمٌ', t: 'Fan/Ilm', p: '[Ilm]' },
      { w: 'أَدَبٌ', t: 'Adabiyot', p: '[Adab]' }, { w: 'فَنٌّ', t: 'San’at', p: '[Fann]' }
    ]
  }
};

function getFullText(sub, topic, pNum, grade) {
  return `<div style="font-family: 'Times New Roman', serif;">
    <h3 style="text-align:center; color:#2563eb; margin-bottom: 20px;">${grade}-sinf ${sub.toUpperCase()}</h3>
    <p style="font-weight:700;">Mavzu: ${topic}</p>
    <p style="text-indent: 40px; margin-top: 20px; line-height: 1.8;">Ushbu sahifa darslikning ${pNum}-betidagi o'quv materiallari asosida Word formatida tayyorlandi.</p>
  </div>`;
}

function generateExercises(sub, pNum, grade) {
  return [{ num: 1, text: `${grade}-sinf topshirig'i.`, task: "Yozma javob bering." }];
}

function generateTextbookContent(subId, grade, partLabel = null) {
  const pages = [];
  const totalPages = grade < 5 ? 120 : 180;
  const topics = subjectTopics[subId] || ["Fan mavzulari"];
  for (let pNum = 1; pNum <= totalPages; pNum++) {
    const topicIdx = Math.floor((pNum - 1) / 10) % topics.length;
    const currentTopic = topics[topicIdx] + (partLabel ? ` (${partLabel})` : "");
    pages.push({
      type: pNum % 8 === 0 ? 'exercise' : 'reading',
      pageNumber: pNum,
      section: `${topicIdx + 1}-§. ${currentTopic}`,
      content: getFullText(subId, currentTopic, pNum, grade),
      exercises: pNum % 8 === 0 ? generateExercises(subId, pNum, grade) : []
    });
  }
  return pages;
}

const data = {
  categories: subjectsList,
  books: {},
  langs: [{ id: 'en', name: 'English', icon: '🇬🇧' }, { id: 'ru', name: 'Russian', icon: '🇷🇺' }, { id: 'ar', name: 'Arabic', icon: '🇸🇦' }],
  levels: [
    { id: 'beg', range: '0-30%', name: 'Boshlanuvchi', count: 250 },
    { id: 'mid', range: '35-50%', name: 'O\'rtacha', count: 345 },
    { id: 'adv', range: '70-100%', name: 'Yuqori', count: 500 }
  ],
  vocabulary: {}
};

subjectsList.forEach(sub => {
  data.books[sub.id] = [];
  for (let g = 1; g <= 11; g++) {
    if (!gradeSubjectsMap[g].includes(sub.id)) continue;

    // Check if we have real PDF links for this grade/subject
    const realBookParts = gradePDFLinksMap[g] && gradePDFLinksMap[g][sub.id];

    if (realBookParts) {
      realBookParts.forEach((p, i) => {
        data.books[sub.id].push({
          id: `${sub.id}_${g}_p${i + 1}`,
          title: (realBookParts.length > 1) ? `${sub.name} (${p.title})` : `${sub.name} ${g}-sinf`,
          cover: "📖",
          grade: g,
          pdfUrl: p.url
        });
      });
    } else if (sub.id === 'ingliz_tili') {
      // For other grades, if manual parts exist, we list them separately too
      data.books[sub.id].push({ id: `${sub.id}_${g}_sb`, title: `${sub.name} (SB) ${g}-sinf`, cover: "📘", grade: g });
      data.books[sub.id].push({ id: `${sub.id}_${g}_wb`, title: `${sub.name} (WB) ${g}-sinf`, cover: "📗", grade: g });
    } else if (sub.id === 'adabiyot' || (g === 11 && sub.id === 'matematika')) {
      data.books[sub.id].push({ id: `${sub.id}_${g}_p1`, title: `${sub.name} (1-qism) ${g}-sinf`, cover: "📚", grade: g });
      data.books[sub.id].push({ id: `${sub.id}_${g}_p2`, title: `${sub.name} (2-qism) ${g}-sinf`, cover: "📚", grade: g });
    } else {
      data.books[sub.id].push({ id: `${sub.id}_${g}`, title: `${sub.name} ${g}-sinf`, cover: "📖", grade: g });
    }
  }
});


// Load real unique data into usage structure
data.langs.forEach(l => {
  data.vocabulary[l.id] = {
    beg: vocabData[l.id].beg,
    mid: vocabData[l.id].mid,
    adv: vocabData[l.id].adv
  };
});

let state = {
  view: 'main', selectedCat: null, activeBook: null, activePage: 0, readerType: 'book',
  selectedLang: 'en', selectedLevel: 'beg',
  selectedGrade: localStorage.getItem('selectedGrade') ? parseInt(localStorage.getItem('selectedGrade')) : null,
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  authPhone: localStorage.getItem('authPhone') || '', showAuthCodeStep: false,
  selectingPartsFor: null, lastRead: JSON.parse(localStorage.getItem('lastRead') || 'null'),
  manualBooks: JSON.parse(localStorage.getItem('manualBooks') || '[]'),
  showSettings: false
};

window.toggleSettings = () => {
  state.showSettings = !state.showSettings;
  window.render();
};

const app = document.querySelector('#app');

window.render = function () {
  try {
    if (!state.isAuthenticated) { renderLogin(); return; }
    if (!state.selectedGrade) { renderGradeSelection(); return; }
    if (state.view === 'reader') { renderReader(); window.scrollTo(0, 0); return; }

    app.innerHTML = `
      <div class="layout">
        <aside>
          <div style="margin-bottom: 2.5rem; position: relative; padding: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
              <h1 style="font-family: 'Outfit'; color: #2563eb; font-size: 1.6rem; margin: 0; font-weight: 900;">7 6 7</h1>
              <button onclick="window.toggleSettings()" style="background: #f1f5f9; border: none; width: 45px; height: 45px; border-radius: 12px; cursor: pointer; font-size: 1.4rem; display: flex; align-items: center; justify-content: center; transition: 0.2s;" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">⚙️</button>
            </div>
            <div style="font-size: 0.75rem; color: #94a3b8; font-weight: 900; letter-spacing: 2px;">KUTUBXONA</div>
            
            ${state.showSettings ? `
              <div style="position: absolute; top: 65px; right: 10px; background: white; border-radius: 18px; box-shadow: 0 15px 40px rgba(0,0,0,0.15); border: 1px solid #e2e8f0; width: 220px; z-index: 1001; overflow: hidden; animation: pageFlip 0.2s ease-out;">
                <div onclick="window.changeGrade()" style="padding: 18px 20px; cursor: pointer; font-weight: 800; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #f1f5f9; color: #1e293b;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='white'">
                  <span style="font-size: 1.2rem;">🔄</span> Sinfni o'zgartirish
                </div>
                <div onclick="window.logout()" style="padding: 18px 20px; cursor: pointer; font-weight: 800; display: flex; align-items: center; gap: 12px; color: #ef4444;" onmouseover="this.style.background='#fef2f2'" onmouseout="this.style.background='white'">
                  <span style="font-size: 1.2rem;">🚪</span> Chiqish
                </div>
              </div>
            ` : ''}
          </div>
          <nav>
            <div class="nav-item ${state.view === 'main' && !state.selectedCat ? 'active' : ''}" onclick="window.goHome()">🏠 Bosh sahifa</div>
            <div class="nav-item ${state.view === 'mybooks' ? 'active' : ''}" onclick="window.setView('mybooks')">📚 Mening kitoblarim</div>
            <hr style="margin: 20px 0; border: none; border-top: 2px solid #f1f5f9;">
            <div style="font-size: 0.75rem; font-weight: 900; color: #94a3b8; margin-bottom: 1rem; padding-left:15px;">MAKTAB FANLARI</div>
            <div class="nav-scroll">
              ${data.categories.map(c => {
      const hasBooks = data.books[c.id].some(b => b.grade === state.selectedGrade);
      return hasBooks ? `<div class="nav-item ${state.selectedCat === c.id ? 'active' : ''}" onclick="window.setCategory('${c.id}')"><span>${c.icon}</span> ${c.name}</div>` : '';
    }).join('')}
            </div>
          </nav>
        </aside>
        <main>
          ${state.view === 'mybooks' ? renderMyBooks() : (state.selectedCat ? renderCategory() : renderHome())}
        </main>
      </div>
      ${state.selectingPartsFor ? renderPartsModal() : ''}
    `;
  } catch (e) { console.error(e); app.innerHTML = `<div>Xatolik: ${e.message}</div>`; }
};

function renderHome() {
  return `
    <div class="banner"><h2>O'zbekiston Davlat Darsliklari</h2><p>Haqiqiy 240+ betlik maktab kitoblari va tillar xazinasi.</p></div>
    <h3 style="margin-bottom: 1.5rem; font-weight: 800; color: #1e293b;">🌍 Tillarni o'rganing</h3>
    <div style="display: flex; gap: 12px; margin-bottom: 30px; flex-wrap: wrap;">
        ${data.langs.map(l => `<button onclick="window.setLang('${l.id}')" style="padding: 12px 28px; border-radius: 50px; border: 2px solid ${state.selectedLang === l.id ? '#2563eb' : '#e2e8f0'}; background: ${state.selectedLang === l.id ? '#2563eb' : 'white'}; color: ${state.selectedLang === l.id ? 'white' : '#1e293b'}; cursor: pointer; font-weight: 800;">${l.icon} ${l.name}</button>`).join('')}
    </div>
    <div class="grid-levels">
      ${data.levels.map(lv => `<div class="level-card" onclick="window.openLang('${lv.id}')"><h4 style="font-weight: 900;">${lv.name}</h4><p>So'zlar to'plami</p></div>`).join('')}
    </div>`;
}

function renderCategory() {
  const cat = data.categories.find(c => c.id === state.selectedCat);
  const books = data.books[state.selectedCat].filter(b => b.grade == state.selectedGrade);
  return `<h2>${cat.icon} ${cat.name}</h2><div class="book-grid">${books.map(b => `<div class="book-card" onclick="window.openBook('${b.id}', '${state.selectedCat}')"><div class="book-cover">${b.cover}</div><div class="book-title">${b.title}</div><button class="open-btn" style="width:100%; margin-top:15px;">Darslikni ochish</button></div>`).join('')}</div>`;
}

function renderPartsModal() {
  const b = state.selectingPartsFor;
  return `<div style="position:fixed; inset:0; background:rgba(0,0,0,0.7); display:flex; align-items:center; justify-content:center; z-index:10000; backdrop-filter:blur(5px);"><div style="background:white; padding:40px; border-radius:30px; width:400px; text-align:center;"><h2>Variantni tanlang</h2><div style="display:grid; gap:15px; margin-top:20px;">${b.parts.map(p => `<button onclick="window.selectPart('${p.id}')" style="padding:15px; background:#2563eb; color:white; border:none; border-radius:15px; font-weight:800; cursor:pointer;">${p.title}</button>`).join('')}<button onclick="state.selectingPartsFor=null; window.render()" style="background:none; border:none; color:#94a3b8; font-weight:700; cursor:pointer;">Bekor qilish</button></div></div></div>`;
}

function renderGradeSelection() {
  app.innerHTML = `
    <div style="min-height:100vh; background:#f1f5f9; display:flex; align-items:center; justify-content:center; padding:40px;">
      <div style="background:white; padding:70px; border-radius:45px; width:100%; max-width:850px; text-align:center; box-shadow: 0 30px 80px rgba(0,0,0,0.15);">
        <h1 style="font-size: 3.5rem; font-weight: 950; margin-bottom: 40px; color: #1e293b;">Sinfingizni tanlang</h1>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(160px, 1fr)); gap:20px;">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(g => `<div onclick="window.setGrade(${g})" style="background:#f8fafc; border:3.5px solid #e2e8f0; padding:35px 20px; border-radius:25px; font-size:2rem; font-weight:950; cursor:pointer; color: #1e293b; transition: 0.3s;" onmouseover="this.style.borderColor='#2563eb'; this.style.color='#2563eb'; this.style.transform='scale(1.08)'; this.style.boxShadow='0 10px 25px rgba(37, 99, 235, 0.1)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.color='#1e293b'; this.style.transform='scale(1)'; this.style.boxShadow='none'">${g}-sinf</div>`).join('')}
        </div>
      </div>
    </div>`;
}

function renderLogin() {
  app.innerHTML = `
    <div style="min-height:100vh; background:linear-gradient(135deg, #2563eb 0%, #1e40af 100%); display:flex; align-items:center; justify-content:center; padding: 30px;">
      <div style="background:white; padding:80px; border-radius:55px; width:100%; max-width:650px; text-align:center; box-shadow: 0 40px 100px rgba(0,0,0,0.4);">
        <h1 style="font-size: 4.5rem; font-weight: 950; color: #2563eb; margin-bottom: 5px;">7 6 7</h1>
        <div style="font-weight: 900; color: #64748b; font-size: 1.5rem; margin-bottom: 50px; letter-spacing: 4px;">KUTUBXONA</div>
        <div style="margin-top:30px;">
          ${!state.showAuthCodeStep ? `
            <input type="tel" id="loginPhone" placeholder="+998 90 123 45 67" style="width:100%; padding:30px; border-radius:25px; border:4px solid #f1f5f9; margin-bottom:30px; outline:none; font-weight:800; font-size: 1.5rem; text-align:center; transition: 0.3s;" onfocus="this.style.borderColor='#2563eb'">
            <button onclick="window.sendAuthCode()" class="open-btn" style="width:100%; padding:28px; border-radius:25px; font-size: 1.8rem; font-weight: 950; box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3);">KODNI OLISH</button>
          ` : `
            <input type="number" id="authCodeInput" placeholder="0000" style="width:100%; padding:30px; border-radius:25px; border:4px solid #2563eb; margin-bottom:30px; text-align:center; font-size:3.5rem; letter-spacing:20px; outline:none; font-weight: 950;">
            <button onclick="window.verifyAuthCode()" class="open-btn" style="width:100%; padding:28px; border-radius:25px; font-size: 1.8rem; font-weight: 950; box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3);">TASDIQLASH</button>
          `}
        </div>
      </div>
    </div>`;
}

function renderReader() {
  if (state.readerType === 'lang') return renderLangReader();
  const b = state.activeBook;
  const isPdf = !!b.pdfUrl;

  if (isPdf) {
    const pageNum = state.activePage + 1;
    const pdfSrc = `${b.pdfUrl}#page=${pageNum}&zoom=page-fit&view=Fit&toolbar=0&navpanes=0&scrollbar=0`;

    app.innerHTML = `<div class="book-page-container" style="background:#0f172a; overflow:hidden; position:fixed; inset:0; display:flex; flex-direction:column;">
      <header style="width:100%; display:flex; justify-content:space-between; align-items:center; padding:10px 20px; background:#1e293b; color:white; border-bottom:1px solid #334155; z-index:10005;">
        <button onclick="window.backFromReader()" style="background:#ef4444; color:white; border:none; padding:8px 20px; border-radius:10px; cursor:pointer; font-weight:900; font-size:0.9rem;">✕ Chiqish</button>
        <div style="font-weight:800; font-size:1rem; flex:1; text-align:center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0 10px;">${b.title}</div>
        <div style="display:flex; gap:10px; align-items: center;">
           <button onclick="window.render()" style="background:#3b82f6; color:white; border:none; padding:8px 12px; border-radius:8px; cursor:pointer; font-weight:700;">🔄</button>
           <div style="background:#334155; padding:5px 15px; border-radius:10px; font-weight:800; font-size:0.9rem; white-space: nowrap;">${pageNum}-bet</div>
        </div>
      </header>
      
      <div id="reader-stage" style="flex:1; width:100%; display:flex; align-items:center; justify-content:center; padding:10px; position:relative;">
        <div id="pageSheet" class="page-sheet-container" style="background:white; width: 100%; height: 100%; max-width: 90vh; aspect-ratio: 1/1.41; border-radius:4px; box-shadow:0 30px 60px rgba(0,0,0,0.8); position:relative; overflow:hidden;">
          <iframe id="pdfIframe" key="${b.id}_${state.activePage}" src="${pdfSrc}" 
            style="width:100%; height:100%; border:none;">
          </iframe>
        </div>
      </div>

      <div class="reader-controls" style="width:100%; padding:20px; background:#1e293b; display:flex; gap:15px; justify-content:center; border-top:1px solid #334155; z-index:10005;">
        <button onclick="window.setPage(${state.activePage - 1})" ${state.activePage === 0 ? 'disabled' : ''} style="flex:1; max-width:180px; padding:15px; border-radius:12px; background:#334155; color:white; font-weight:900; cursor:pointer; border:none;">← OLDINGI</button>
        <button onclick="window.setPage(${state.activePage + 1})" style="flex:1; max-width:180px; padding:15px; border-radius:12px; background:#2563eb; color:white; font-weight:900; cursor:pointer; border:none;">KEYINGI →</button>
      </div>
    </div>`;
  } else {
    const p = b.pages[state.activePage];
    app.innerHTML = `<div class="book-page-container">
      <header style="width:100%; max-width:800px; display:flex; justify-content:space-between; align-items:center; padding:15px 0;">
        <button onclick="window.goHome()" style="background:#ef4444; color:white; border:none; padding:10px 25px; border-radius:12px; cursor:pointer; font-weight:900;">✕ Chiqish</button>
        <div style="background:white; padding:10px 20px; border-radius:30px; font-weight:800; color:#1e293b;">${b.title} • ${state.activePage + 1}-bet</div>
      </header>
      <div class="page-paper" style="background:white; width:100%; max-width:800px; min-height:1000px; padding:80px 100px; border-radius:4px; position:relative; margin-bottom:50px;">
        <div class="page-inner-content">
          <h1 style="text-align:center; margin-bottom:35px;">${p.section}</h1>
          <div style="font-size:1.3rem; line-height:2.1; text-align:justify; white-space:pre-line;">${p.content}</div>
          ${p.type === 'exercise' ? `<div style="margin-top:50px; background:#f8fafc; padding:30px; border-left:6px solid #2563eb;"><h3>TOPSHIRIQLAR:</h3>${p.exercises.map(ex => `<p><b>${ex.num}.</b> ${ex.text}<br><em>— ${ex.task}</em></p>`).join('')}</div>` : ''}
        </div>
        <div style="position:absolute; bottom:40px; left:0; width:100%; text-align:center; color:#94a3b8; font-weight:800;">${p.pageNumber}</div>
      </div>
      <div class="reader-controls" style="position:fixed; bottom:30px; display:flex; gap:20px; background:rgba(255,255,255,0.8); backdrop-filter:blur(10px); padding:15px 30px; border-radius:50px;">
        <button onclick="window.setPage(${state.activePage - 1})" ${state.activePage === 0 ? 'disabled' : ''} style="padding:12px 30px; border-radius:50px; background:white; color:#2563eb; font-weight:900; cursor:pointer;">← Oldingi</button>
        <button onclick="window.setPage(${state.activePage + 1})" ${state.activeBook.pages && state.activePage >= b.pages.length - 1 ? 'disabled' : ''} style="padding:12px 40px; border-radius:50px; background:#2563eb; color:white; font-weight:900; cursor:pointer;">Keyingi →</button>
      </div>
    </div>`;
  }
}

function renderLangReader() {
  const l = data.langs.find(x => x.id === state.selectedLang);
  const lv = data.levels.find(x => x.id === state.selectedLevel);
  const words = data.vocabulary[state.selectedLang][state.selectedLevel];
  const isAr = state.selectedLang === 'ar';

  const sortedWords = [...words].sort((a, b) => a.w.localeCompare(b.w, isAr ? 'ar' : 'uz'));
  const grouped = {};
  sortedWords.forEach(w => { const first = w.w[0].toUpperCase(); if (!grouped[first]) grouped[first] = []; grouped[first].push(w); });
  const letters = Object.keys(grouped).sort();

  app.innerHTML = `<div style="padding:20px; background:#f8fafc; min-height:100vh; overflow-y:auto;">
    <header style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; max-width:1000px; margin-inline:auto;">
      <div><h2 style="font-weight:900; font-size:1.8rem;">${l.icon} ${l.name} Lug'ati</h2><p style="font-weight:700; color:#64748b;">Daraja: ${lv.name} (${words.length} ta so'z)</p></div>
      <button onclick="window.goHome()" style="background:#ef4444; color:white; border:none; padding:12px 25px; border-radius:12px; cursor:pointer; font-weight:900;">✕ Chiqish</button>
    </header>

    <!-- ALPHABET NAVIGATION (3 ROWS) -->
    <div style="margin-bottom: 30px; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; max-width: 600px; margin-inline: auto;">
      ${letters.map(letter => {
    const letterPronunciation = alphabetData[state.selectedLang][letter] || '';
    return `
          <a href="#letter-${letter}" style="text-decoration: none;">
            <div style="background: white; color: #1e293b; padding: 8px 15px; border-radius: 10px; display: flex; flex-direction: column; align-items: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; transition: 0.2s; min-width: 50px;" onmouseover="this.style.transform='translateY(-2px)'; this.style.borderColor='#2563eb'; this.style.color='#2563eb'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#e2e8f0'; this.style.color='#1e293b'">
              <div style="font-size: 1.2rem; font-weight: 900;">${letter}</div>
              <div style="font-size: 0.7rem; font-weight: 600; color: #64748b; font-family: monospace;">${letterPronunciation}</div>
            </div>
          </a>`;
  }).join('')}
    </div>

    <div style="max-width:1000px; margin:0 auto;">
      ${letters.map(letter => `
        <div id="letter-${letter}" style="margin-bottom: 30px; scroll-margin-top: 20px;">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
            ${grouped[letter].map(w => `<div style="background:white; padding:15px; border-radius:20px; box-shadow:0 10px 20px rgba(0,0,0,0.02); border: 1px solid #f1f5f9; transition:0.2s; display:flex; flex-direction:column; justify-content:space-between;" onmouseover="this.style.transform='translateY(-3px)'; this.style.borderColor='#2563eb'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#f1f5f9'">
                <div>
                  <div style="font-weight: 900; font-size: 1.2rem; direction:${isAr ? 'rtl' : 'ltr'}; text-align:${isAr ? 'right' : 'left'}; font-family:${isAr ? '"Traditional Arabic", serif' : 'inherit'}; color: #1e293b; margin-bottom: 5px; line-height: 1.2; word-break: break-word;">${w.w}</div>
                  <div style="color:#64748b; font-weight:600; font-size:0.8rem; margin-bottom: 10px; text-align:${isAr ? 'right' : 'left'}; font-family: monospace;">${w.p}</div>
                </div>
                <div>
                  <div style="height: 1px; background: #f1f5f9; width: 100%; margin-bottom: 10px;"></div>
                  <div style="color:#2563eb; font-weight: 800; font-size: 1rem; text-align:${isAr ? 'right' : 'left'}; line-height: 1.2; word-break: break-word;">${w.t}</div>
                </div>
              </div>`).join('')}
          </div>
        </div>`).join('')}
    </div></div>`;
}

function renderMyBooks() {
  const now = new Date();
  return `<h2 style="font-size:2.5rem; margin-bottom:2rem; font-weight:900;">📚 Mening kitoblarim</h2>
    <div style="display:grid; grid-template-columns:1fr; gap:40px;">
      <div style="background:linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding:60px; border-radius:40px; text-align:center; color:white;">
        <div style="font-size:6rem; font-weight:950;">${now.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })}</div>
        <div style="font-size:1.8rem; font-weight:800; opacity:0.9;">${now.toLocaleDateString('uz-UZ', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
      </div>
      <div style="display:grid; grid-template-columns:1fr; lg:grid-template-columns:1fr 1fr; gap:30px;">
        <div style="background:white; padding:60px; border-radius:45px; box-shadow:0 20px 50px rgba(0,0,0,0.08); border:1px solid #e2e8f0;">
          <h3 style="font-size: 2rem; font-weight: 950; margin-bottom: 30px;">Yangi kitob qo'shish</h3>
          <div style="display:grid; gap:25px; margin-top:20px;">
            <input id="manualBookInp" placeholder="Kitob nomi..." style="padding:25px; border:3px solid #f1f5f9; border-radius:22px; font-size: 1.2rem; font-weight: 800; width: 100%;">
            <input id="manualPageInp" type="number" placeholder="Bet..." style="padding:25px; border:3px solid #f1f5f9; border-radius:22px; font-size: 1.2rem; font-weight: 800; width: 100%;">
            <button onclick="window.addManualBook()" style="background:#2563eb; color:white; border:none; padding:25px; border-radius:22px; font-weight:950; font-size: 1.4rem; cursor: pointer; transition: 0.3s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">💾 QO'SHISH</button>
          </div>
        </div>
        <div style="display:grid; gap:25px; align-content:start;">
          ${state.manualBooks.map((b, i) => `
            <div style="background:white; padding:35px 50px; border-radius:35px; display:flex; justify-content:space-between; align-items:center; border-left:15px solid #2563eb; box-shadow: 0 15px 35px rgba(0,0,0,0.05); transition: 0.3s;">
              <div>
                <div style="font-weight:950; font-size:2rem; color: #1e293b; margin-bottom: 5px;">${b.title}</div>
                <div style="color:#2563eb; font-weight:900; font-size: 1.4rem;">${b.page}-bet</div>
              </div>
              <button onclick="window.removeManualBook(${i})" style="background:#fee2e2; color:#ef4444; width:70px; height:70px; border:none; border-radius:22px; font-size: 1.8rem; cursor: pointer; transition: 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">🗑️</button>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
}

window.addManualBook = () => {
  const title = document.getElementById('manualBookInp').value; const page = document.getElementById('manualPageInp').value;
  if (!title || !page) return; state.manualBooks.push({ title, page }); localStorage.setItem('manualBooks', JSON.stringify(state.manualBooks)); window.render();
};
window.removeManualBook = (i) => { state.manualBooks.splice(i, 1); localStorage.setItem('manualBooks', JSON.stringify(state.manualBooks)); window.render(); };
window.openBook = (id, catId) => {
  const b = data.books[catId].find(x => x.id === id);
  if (!b) return;

  // Lazy load content if not exists and NOT a PDF book
  if (!b.pages && !b.pdfUrl) {
    b.pages = generateTextbookContent(catId, b.grade);
  }

  state.activeBook = { ...b };
  state.activePage = 0;
  state.view = 'reader';
  window.render();
};
window.selectPart = (pid) => {
  const b = state.selectingPartsFor;
  const part = b.parts.find(p => p.id === pid);

  if (part.pdfUrl) {
    state.activeBook = { ...b, pdfUrl: part.pdfUrl, title: `${b.title} (${part.title})`, parts: null };
  } else if (!part.pages) {
    const partName = part.title;
    const subId = b.id.split('_').slice(0, -1).join('_');
    part.pages = generateTextbookContent(subId, b.grade, partName);
    state.activeBook = { ...b, pages: part.pages, title: `${b.title} (${part.title})` };
  } else {
    state.activeBook = { ...b, pages: part.pages, title: `${b.title} (${part.title})` };
  }

  state.selectingPartsFor = null;
  state.activePage = 0;
  state.view = 'reader';
  window.render();
};
window.setPage = (p) => {
  const limit = state.activeBook.pdfUrl ? 1000 : (state.activeBook.pages ? state.activeBook.pages.length : 0);
  if (p >= 0 && p < limit) {
    state.activePage = p;
    window.render();
  }
};
window.setGrade = (g) => { state.selectedGrade = g; localStorage.setItem('selectedGrade', g); window.render(); };
window.changeGrade = () => { state.selectedGrade = null; localStorage.removeItem('selectedGrade'); window.render(); };
window.sendAuthCode = () => { state.showAuthCodeStep = true; window.render(); };
window.verifyAuthCode = () => { state.isAuthenticated = true; localStorage.setItem('isAuthenticated', 'true'); window.render(); };
window.logout = () => { state.isAuthenticated = false; localStorage.removeItem('isAuthenticated', false); window.render(); };
window.setCategory = (id) => { state.selectedCat = id; state.view = 'main'; window.render(); };
window.setView = (v) => { state.view = v; state.selectedCat = null; window.render(); };
window.goHome = () => { state.view = 'main'; state.selectedCat = null; state.selectingPartsFor = null; state.activeBook = null; window.render(); };
window.backFromReader = () => {
  state.view = 'main';
  state.activeBook = null;
  window.render();
};
window.openLang = (lv) => { state.selectedLevel = lv; state.readerType = 'lang'; state.view = 'reader'; window.render(); };
window.setLang = (l) => { state.selectedLang = l; window.render(); };

window.render();
