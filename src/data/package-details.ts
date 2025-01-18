import { UmrahPackage } from "@/types/package-details";

const whatsappLink = process.env.WHATSAPP_LINK;

// NOTE: Hanya Dummy
export const dummyData: UmrahPackage[] = [
  {
    id: "umrah-hemat-fokus-ibadah-silver",
    tagline: "Umrah Hemat, Fokus Ibadah",
    thumbnail:
      "/assets/image/packages-umrah/cover-umrah-hemat-fokus-ibadah-silver.jpg",
    type: "Reguler",
    category: "Silver",
    season: "NON RAMADHAN",
    isFastTrain: false,
    city_departure: [
      {
        city: "Jakarta",
        route: "CGK-JED",
      },
    ],
    duration: "9 Hari",
    package: "Silver",
    down_payment: 7,
    order_url: `${whatsappLink}Assalamualaikum%2C%20Saya%20tertarik%20untuk%20melakukan%20pemesanan%20paket%20Silver%20Umrah%20Hemat%2C%20Fokus%20Ibadah.%20Saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20paket%20tersebut.%0A%0ATerima%20kasih%20atas%20bantuannya.%20Saya%20tunggu%20informasi%20lebih%20lanjut.`,
    departure_date: [
      {
        date: "2025-02-18T10:00:00+07:00",
        status: "expired",
      },
      {
        date: "2025-03-29T10:00:00+07:00",
        status: "expired",
      },
      {
        date: "2025-04-24T10:00:00+07:00",
        status: "active",
      },
      {
        date: "2025-04-15T10:00:00+07:00",
        status: "closing-umrah",
      },
      {
        date: "2025-05-01T10:00:00+07:00",
        status: "musim-haji",
      },
      {
        date: "2025-06-01T10:00:00+07:00",
        status: "musim-haji",
      },
      {
        date: "2025-07-30T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-08-17T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-09-21T10:00:00+07:00",
        status: "coming-soon",
      },
    ],
    doublePrice: 26100000,
    triplePrice: 24600000,
    quadPrice: 23100000,
    infantPrice: undefined,
    doubleFinalPrice: undefined,
    tripleFinalPrice: undefined,
    quadFinalPrice: undefined,
    infantFinalPrice: undefined,
    flight_details: {
      wisata_flight: [],
      departure_flight: {
        flight_number: undefined,
        duration: undefined,
        airport_name_departure: "Soekarno Hatta International Airport",
        airport_terminal_departure: "Terminal 3 Internasional",
        airport_code_departure: "CGK",
        airport_city_departure: "Jakarta",
        airport_name_arrival: "Changi Airport",
        airport_terminal_arrival: undefined,
        airport_code_arrival: "SIN",
        airport_city_arrival: "Singapura",
        departure_datetime: undefined,
        class: "Economy",
        flight_type: "Transit",
        airline: "Scoot",
        aircraft_type: undefined,
        seat_layout: undefined,
        baggage_allowance: 20,
        cabin_baggage: 7,
        airline_logo: "/assets/airlines/scoot.png",
        skytrax: undefined,
        rating: undefined,
        transit: {
          flight_number: undefined,
          duration: undefined,
          airport_name_departure: "Changi Airport",
          airport_terminal_departure: undefined,
          airport_code_departure: "SIN",
          airport_city_departure: "Singapura",
          airport_name_arrival: "King Abdulaziz International Airport",
          airport_terminal_arrival: undefined,
          airport_code_arrival: "JED",
          airport_city_arrival: "Jeddah",
          departure_datetime: undefined,
          class: "Economy",
          flight_type: "Direct",
          airline: "Scoot",
          aircraft_type: undefined,
          seat_layout: undefined,
          baggage_allowance: 20,
          cabin_baggage: 7,
          airline_logo: "/assets/airlines/scoot.png",
          skytrax: undefined,
          rating: undefined,
          transit: undefined,
          transit_datetime: undefined,
        },
        transit_datetime: undefined,
      },
      return_flight: {
        flight_number: undefined,
        duration: undefined,
        airport_name_departure: "King Abdulaziz International Airport",
        airport_terminal_departure: undefined,
        airport_code_departure: "JED",
        airport_city_departure: "Jeddah",
        airport_name_arrival: "Changi Airport",
        airport_terminal_arrival: undefined,
        airport_code_arrival: "SIN",
        airport_city_arrival: "Singapura",
        departure_datetime: undefined,
        class: "Economy",
        flight_type: "Transit",
        airline: "Scoot",
        aircraft_type: undefined,
        seat_layout: undefined,
        baggage_allowance: 20,
        cabin_baggage: 7,
        airline_logo: "/assets/airlines/scoot.png",
        skytrax: undefined,
        rating: undefined,
        transit: {
          flight_number: undefined,
          duration: undefined,
          airport_name_departure: "Changi Airport",
          airport_terminal_departure: undefined,
          airport_code_departure: "SIN",
          airport_city_departure: "Singapura",
          airport_name_arrival: "Soekarno Hatta International Airport",
          airport_terminal_arrival: "Terminal 3 Internasional",
          airport_code_arrival: "CGK",
          airport_city_arrival: "Jakarta",
          departure_datetime: undefined,
          class: "Economy",
          flight_type: "Direct",
          airline: "Scoot",
          aircraft_type: undefined,
          seat_layout: undefined,
          baggage_allowance: 20,
          cabin_baggage: 7,
          airline_logo: "/assets/airlines/scoot.png",
          skytrax: undefined,
          rating: undefined,
          transit: undefined,
          transit_datetime: undefined,
        },
        transit_datetime: undefined,
      },
    },
    hotel_details: {
      wisata: [],
      makkah: {
        id: "le-meridien-tower-mekkah",
        city: "Mekkah",
        hotel_name: "Le Meridien Tower",
        star_rating: 3,
        duration: 4,
        images: [
          {
            id: "1",
            src: "/assets/image/hotel/makkah/le-meridien-tower/bedroom-le-meridien-tower-1.jpg",
            category: "Kamar",
          },
          {
            id: "2",
            src: "/assets/image/hotel/makkah/le-meridien-tower/bedroom-le-meridien-tower-2.jpg",
            category: "Kamar",
          },
          {
            id: "3",
            src: "/assets/image/hotel/makkah/le-meridien-tower/bedroom-le-meridien-tower-3.jpg",
            category: "Kamar",
          },
          {
            id: "4",
            src: "/assets/image/hotel/makkah/le-meridien-tower/bedroom-le-meridien-tower-4.jpg",
            category: "Lobby",
          },
        ],
        google_maps_link_noembed: "https://maps.app.goo.gl/qZY9Dp2uZMRRrFLg9",
        google_maps_link:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.6725209251936!2d39.82396827526694!3d21.402795380341743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cc3bae24752d%3A0xca38e13e3889c0e7!2sLe%20M%C3%A9ridien%20Towers%20Makkah!5e0!3m2!1sid!2sid!4v1736987502086!5m2!1sid!2sid",
        google_review_link:
          "https://www.google.com/travel/search?q=le%20meridien%20tower%20makkah&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499704%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72749231%2C72760080%2C72808078&hl=id-ID&gl=id&cs=1&ssta=1&qs=CAEyFENnc0k1NEdueE9PbnVKektBUkFCOAJCCQnnwIk4PuE4ykIJCefAiTg-4TjK&ap=KigKEgmh9DwiN2Y1QBHQoVawlOlDQBISCVDhtJ0GaDVAEdChVhQD6kNAugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiw9eeM6e-JAxUAAAAAHQAAAAAQBQ&ts=CAESCAoCCAMKAggDGkcKKRInMiUweDE1YzNjYzNiYWUyNDc1MmQ6MHhjYTM4ZTEzZTM4ODljMGU3EhoSFAoHCOgPEAwYBxIHCOgPEAwYCBgBMgIQAA%3D%3D",
        description:
          "Le Méridien Towers Makkah adalah hotel bintang 5 yang terletak strategis di Mekkah, Arab Saudi, hanya 3 menit dari Masjidil Haram dengan layanan antar-jemput gratis 24 jam. Hotel ini menawarkan 647 kamar yang luas dan elegan, termasuk suite diplomatik, suite kerajaan, dan suite kerajaan, yang dilengkapi dengan dapur kecil, TV layar datar, minibar, dan akses Wi-Fi gratis. Tamu dapat menikmati berbagai fasilitas, termasuk tiga restoran yang menyajikan masakan internasional, layanan kamar 24 jam, layanan kebersihan harian, dan layanan concierge. Terletak di area Kudai, hotel ini memudahkan akses ke Masjidil Haram dan tempat-tempat suci lainnya di Mekkah, menjadikannya pilihan ideal untuk para tamu yang menginginkan kenyamanan dan kemudahan selama kunjungan mereka.",
        facilities: [
          "AC",
          "WiFi",
          "Restoran",
          "Layanan Kamar",
          "Kamar Mandi Dalam",
        ],
        check_in_time: undefined,
        check_out_time: undefined,
        address: "Jl. Kudai, Misfalah, Makkah 21955, Arab Saudi",
        distance_to_masjid: 200,
        food_type: "Prasmanan",
        food_amount: 3,
        food_menu: undefined,
      },
      madinah: {
        id: "hayah-golden-madinah",
        city: "Madinah",
        hotel_name: "Hayah Golden",
        star_rating: 3,
        duration: 3,
        images: [
          {
            id: "1",
            src: "/assets/image/hotel/madinah/hayah-golden/exterior-hayah-golden.jpg",
            category: "Eksterior",
          },
          {
            id: "2",
            src: "/assets/image/hotel/madinah/hayah-golden/bedroom-hayah-golden-1.jpg",
            category: "Kamar",
          },
          {
            id: "3",
            src: "/assets/image/hotel/madinah/hayah-golden/bedroom-hayah-golden-2.jpg",
            category: "Kamar",
          },
          {
            id: "4",
            src: "/assets/image/hotel/madinah/hayah-golden/bedroom-hayah-golden-3.jpg",
            category: "Kamar",
          },
          {
            id: "5",
            src: "/assets/image/hotel/madinah/hayah-golden/bedroom-hayah-golden-4.jpg",
            category: "Kamar",
          },
          {
            id: "6",
            src: "/assets/image/hotel/madinah/hayah-golden/bedroom-hayah-golden-5.jpg",
            category: "Kamar",
          },
        ],
        google_maps_link_noembed: "https://maps.app.goo.gl/TzTKZr3YgSpK3J2t5",
        google_maps_link:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.466232858313!2d39.60216347521062!3d24.4692975781867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf046d507ae3%3A0x327fc68978ea7c68!2sHAYAH%20GOLDEN!5e0!3m2!1sid!2sid!4v1736987628731!5m2!1sid!2sid",
        google_review_link:
          "https://www.google.com/travel/search?q=hayah%20golden&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499704%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72749231%2C72760080%2C72808078&hl=id-ID&gl=id&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MTViZGJmMDQ2ZDUwN2FlMzoweDMyN2ZjNjg5NzhlYTdjNjgSGhIUCgcI6A8QCxgeEgcI6A8QDBgBGAEyAhAA&qs=CAEyE0Nnb0k2UGlweDVmUjhiOHlFQUU4AkIJCWh86niJxn8yQgkJaHzqeInGfzI&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiAkfu35u-JAxUAAAAAHQAAAAAQFA",
        description:
          "Hotel Hayah Golden adalah hotel bintang 3 yang terletak di Madinah, Arab Saudi, hanya sekitar 5 menit berjalan kaki dari Masjid Nabawi. Hotel ini menawarkan 222 kamar modern yang dilengkapi dengan fasilitas seperti TV layar datar, saluran satelit, minibar, dan Wi-Fi gratis di area umum. Tersedia layanan resepsionis 24 jam dan layanan kamar, serta fasilitas parkir gratis yang bergantung pada ketersediaan. Hotel ini berjarak sekitar 800 meter dari Al-Baqi' dan hanya 10 menit berjalan kaki dari Masjid Nabawi. Dengan berbagai pilihan kamar mulai dari double, triple, hingga quadruple, hotel ini cocok untuk berbagai kebutuhan akomodasi, baik untuk perjalanan ibadah maupun keluarga. Hotel Hayah Golden dapat dicapai dalam waktu sekitar 20 menit berkendara dari Bandara Internasional Prince Mohammad Bin Abdulaziz.",
        facilities: [
          "AC",
          "WiFi",
          "TV",
          "Restoran",
          "Lift",
          "Layanan Kamar",
          "Kamar Mandi Dalam",
        ],
        check_in_time: undefined,
        check_out_time: undefined,
        address: "FJ93+PV9, Al Manakhah, Madinah 42311, Arab Saudi",
        distance_to_masjid: 500,
        food_type: "Prasmanan",
        food_amount: 3,
        food_menu: undefined,
      },
    },
    bus_details: {
      images: [
        {
          id: "1",
          src: "/assets/image/transportation/bus/saptco-economy-1.jpg",
          category: undefined,
        },
        {
          id: "2",
          src: "/assets/image/transportation/bus/saptco-economy-2.jpg",
          category: undefined,
        },
        {
          id: "3",
          src: "/assets/image/transportation/bus/saptco-economy-3.jpg",
          category: undefined,
        },
      ],
      id: "sapico-reguler",
      provider: "Saptco",
      bus_type: "Economy-Class",
      seat_amount: 45,
    },
    promos: [
      {
        imageUrl: "/assets/promo/promo-diskon-3-juta.jpg",
        link: "promo-3-juta",
      },
    ],
    addons: [
      {
        title: "Kota Al-Ula",
        category: "Wisata Kota",
        price: 2000000,
        places: ["Jabal Ikmah", "Museum Al-Ula", "Makam Nabi Hud"],
        imageUrl: "/assets/image/voucher/al-ula-4.jpeg",
      },
      {
        title: "Kereta Cepat",
        category: "Transportasi",
        price: 900000,
        places: ["Kereta Cepat"],
        imageUrl: "/assets/image/packages-umrah/package-detail-1.png",
      },
      {
        title: "Makan Romansiah + Cable Car",
        category: "Wisata Kota",
        price: 1000000,
        places: ["Restoran Al Romansiah", "Cable Car"],
        imageUrl: "/assets/image/voucher/al-romansiah-restaurant-2.jpeg",
      },
      {
        title: "Restoran Asia Jeddah + Speed Boat Jeddah",
        category: "Wisata Kota",
        price: 1500000,
        places: ["Restoran Asia Jeddah", "Speed Boat"],
        imageUrl: "/assets/image/voucher/asia-restaurant-jeddah-1.jpg",
      },
    ],
    itineraries: [
      {
        id: "1",
        nth: 1,
        city: "Madinah",
        days: [
          {
            id: "1",
            nth: 1,
            title: "Keberangkatan dari Jakarta",
            widgets: [],
            description:
              "Jamaah berkumpul di Bandara Soekarno-Hatta untuk proses check in tiket, imigrasi dan bagasi. Sebelum keberangkatan akan ada briefing dan doa bersama.",
          },
          {
            id: "2",
            nth: 2,
            title: "Mendarat di Jeddah lalu ke Madinah",
            widgets: [
              {
                id: "1",
                type: "Transport",
                transportWith: "Bus",
                from: "Bandara King Abdul Aziz Jeddah",
                to: "Hotel Hayah Golden Madinah",
              },
              {
                id: "2",
                type: "Hotel",
                hotel_name: "Hayah Golden Madinah",
              },
              {
                id: "3",
                type: "Information",
                description:
                  "Tidak ada aktivitas hari ini. Silakan nikmati waktu dengan beristirahat",
              },
            ],
            description:
              "Jamaah mendarat di Bandara King Abdul Aziz di Jeddah lalu melanjutkan perjalanan dengan transportasi darat. Sesampainya di Madinah, Jamaah akan melakukan proses check in hotel lalu beristirahat untuk kegiatan esok hari.",
          },
          {
            id: "3",
            nth: 3,
            title: "City Tour Madinah",
            widgets: [],
            description:
              "Jamaah melakukan perjalanan mengelilingi kota Madinah dan mengunjungi beberapa destinasi wisata. Seperti: Masjid Quba, Jabal Uhud dan Kebun Kurma.",
          },
          {
            id: "4",
            nth: 4,
            title: "Ziarah di Madinah",
            widgets: [],
            description:
              "Jamaah melakukan ziarah di Raudah, Masjid Nabawi dan sekitaran Masjid Nabawi (Saqifah Bani Sa’idah, Masjid Ghamamah, Makam Rasulullah SAW, dan Makam Baqi).",
          },
          {
            id: "5",
            nth: 5,
            title: "Perjalanan Madinah - Makkah",
            widgets: [
              {
                id: "1",
                type: "Transport",
                transportWith: "Bus",
                from: "Hotel Hayah Golden Madinah",
                to: "Hotel Le Meridien Tower Makkah",
              },
              {
                id: "2",
                type: "Hotel",
                hotel_name: "Le Meridien Tower Makkah",
              },
              {
                id: "3",
                type: "Information",
                description:
                  "Tidak ada aktivitas hari ini. Silahkan nikmati waktu dengan beristirahat.",
              },
            ],
            description:
              "Jamaah melakukan proses check out Hotel di Madinah, lalu melanjutkan perjalanan ke Makkah dengan transportasi darat.Sesampainya di Makkah, Jamaah langsung melakukan proses check in Hotel di Makkah lalu makan malam dan beristirahat untuk ibadah Umrah besok hari.",
          },
        ],
        images: [
          {
            id: "1",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: undefined,
          },
          {
            id: "2",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: undefined,
          },
        ],
      },
      {
        id: "2",
        nth: 2,
        city: "Makkah",
        days: [
          {
            id: "1",
            nth: 6,
            title: "Pelaksanaan Ibadah Umrah di Makkah",
            widgets: [],
            description: "Jamaah melaksanakan ibadah Umrah di Masjidil Haram.",
          },
          {
            id: "2",
            nth: 7,
            title: "City Tour Makkah",
            widgets: [],
            description:
              "Jamaah melakukan perjalanan mengelilingi kota Makkah dan mengunjungi beberapa destinasi wisata.",
          },
          {
            id: "3",
            nth: 8,
            title: "Ziarah di Makkah",
            widgets: [],
            description:
              "Jamaah melakukan ziarah di Jabal Tsur, Jabal Nur, Jabal Rahmah, Padang Arafah dan Muzdalifah.",
          },
          {
            id: "4",
            nth: 9,
            title: "Kepulangan menuju Jakarta",
            widgets: [
              {
                id: "1",
                type: "Transport",
                transportWith: "Bus",
                from: "Hotel Le Meridien Tower Makkah",
                to: "Bandara King Abdul Aziz Jeddah",
              },
            ],
            description:
              "Jamaah melakukan proses check out Hotel di Makkah, lalu melanjutkan perjalanan ke Jeddah dengan transportasi darat.Setelah itu Jamaah Bersiap untuk penerbangan pulang ke Bandara Soekarno-Hatta Jakarta. #BikinTenang",
          },
        ],
        images: [
          {
            id: "1",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: undefined,
          },
          {
            id: "2",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: undefined,
          },
        ],
      },
    ],
  },
  {
    id: "umrah-berkah-fokus-ibadah-gold",
    tagline: "Umrah Berkah, Fokus Ibadah",
    thumbnail:
      "/assets/image/packages-umrah/cover-umrah-hemat-fokus-ibadah-silver.jpg",
    type: "Reguler",
    category: "Gold",
    season: "NON RAMADHAN",
    isFastTrain: false,
    city_departure: [
      {
        city: "Jakarta",
        route: "CGK-JED",
      },
    ],
    duration: "9 Hari",
    package: "Gold",
    down_payment: 7,
    order_url: `${whatsappLink}Assalamualaikum%2C%20Saya%20tertarik%20untuk%20melakukan%20pemesanan%20paket%20Silver%20Umrah%20Hemat%2C%20Fokus%20Ibadah.%20Saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20paket%20tersebut.%0A%0ATerima%20kasih%20atas%20bantuannya.%20Saya%20tunggu%20informasi%20lebih%20lanjut.`,
    departure_date: [
      {
        date: "2025-02-18T10:00:00+07:00",
        status: "expired",
      },
      {
        date: "2025-03-29T10:00:00+07:00",
        status: "expired",
      },
      {
        date: "2025-04-24T10:00:00+07:00",
        status: "active",
      },
      {
        date: "2025-04-15T10:00:00+07:00",
        status: "closing-umrah",
      },
      {
        date: "2025-05-01T10:00:00+07:00",
        status: "musim-haji",
      },
      {
        date: "2025-06-01T10:00:00+07:00",
        status: "musim-haji",
      },
      {
        date: "2025-07-30T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-08-17T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-09-21T10:00:00+07:00",
        status: "coming-soon",
      },
    ],
    doublePrice: 33500000,
    triplePrice: 31000000,
    quadPrice: 28500000,
    infantPrice: undefined,
    doubleFinalPrice: undefined,
    tripleFinalPrice: undefined,
    quadFinalPrice: undefined,
    infantFinalPrice: undefined,
    flight_details: {
      wisata_flight: [],
      departure_flight: {
        flight_number: undefined,
        duration: undefined,
        airport_name_departure: "Soekarno Hatta International Airport",
        airport_terminal_departure: "Terminal 3 Internasional",
        airport_code_departure: "CGK",
        airport_city_departure: "Jakarta",
        airport_name_arrival: "King Abdulaziz International Airport",
        airport_terminal_arrival: undefined,
        airport_code_arrival: "JED",
        airport_city_arrival: "Jeddah",
        departure_datetime: undefined,
        class: "Economy",
        flight_type: "Direct",
        airline: "Saudia Airlines",
        aircraft_type: undefined,
        seat_layout: undefined,
        baggage_allowance: 20,
        cabin_baggage: 7,
        airline_logo: "/assets/airlines/saudia-airlines.png",
        skytrax: "Full Service",
        rating: "4",
        transit: undefined,
        transit_datetime: undefined,
      },
      return_flight: {
        flight_number: undefined,
        duration: undefined,
        airport_name_departure: "King Abdulaziz International Airport",
        airport_terminal_departure: undefined,
        airport_code_departure: "JED",
        airport_city_departure: "Jeddah",
        airport_name_arrival: "Soekarno Hatta International Airport",
        airport_terminal_arrival: undefined,
        airport_code_arrival: "CGK",
        airport_city_arrival: "Jakarta",
        departure_datetime: undefined,
        class: "Economy",
        flight_type: "Direct",
        airline: "Saudia Airlines",
        aircraft_type: undefined,
        seat_layout: undefined,
        baggage_allowance: 20,
        cabin_baggage: 7,
        airline_logo: "/assets/airlines/saudia-airlines.png",
        skytrax: "Full Service",
        rating: "4",
        transit: undefined,
        transit_datetime: undefined,
      },
    },
    hotel_details: {
      wisata: [],
      makkah: {
        id: "anjum-makkah",
        city: "Makkah",
        hotel_name: "Anjum",
        star_rating: 4,
        duration: 4,
        images: [
          {
            id: "1",
            src: "/assets/image/hotel/makkah/anjum/exterior-anjum-1.jpg",
            category: "Eksterior",
          },
          {
            id: "2",
            src: "/assets/image/hotel/makkah/anjum/bedroom-anjum-1.jpg",
            category: "Kamar",
          },
          {
            id: "3",
            src: "/assets/image/hotel/makkah/anjum/bedroom-anjum-2.jpg",
            category: "Kamar",
          },
          {
            id: "3",
            src: "/assets/image/hotel/makkah/anjum/bedroom-anjum-3.jpg",
            category: "Kamar Mandi",
          },
        ],
        google_maps_link_noembed: "https://maps.app.goo.gl/sGKqAQvur7mLvbXb9",
        google_maps_link:
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3714.112915726407!2d39.8171793!3d21.4248063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b47a578a4b%3A0x70a3d202df30a258!2sHotel%20Anjum!5e0!3m2!1sid!2sid!4v1737177264346!5m2!1sid!2sid",
        google_review_link:
          "https://www.google.com/travel/search?q=anjum%20makkah%20hotel&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499704%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72749231%2C72760080%2C72808078&hl=id-ID&gl=id&cs=1&ssta=1&qs=CAEyE0Nnb0kyTVRDLWEzQTlORndFQUU4AkIJCViiMN8C0qNwQgkJWKIw3wLSo3A&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjg0ceO6O-JAxUAAAAAHQAAAAAQBQ&ts=CAESCAoCCAMKAggDGkcKKRInMiUweDE1YzIwNGI0N2E1NzhhNGI6MHg3MGEzZDIwMmRmMzBhMjU4EhoSFAoHCOgPEAwYDhIHCOgPEAwYDxgBMgIQAA%3D%3D",
        description:
          "Le Méridien Towers Makkah adalah hotel bintang 5 yang terletak strategis di Mekkah, Arab Saudi, hanya 3 menit dari Masjidil Haram dengan layanan antar-jemput gratis 24 jam. Hotel ini menawarkan 647 kamar yang luas dan elegan, termasuk suite diplomatik, suite kerajaan, dan suite kerajaan, yang dilengkapi dengan dapur kecil, TV layar datar, minibar, dan akses Wi-Fi gratis. Tamu dapat menikmati berbagai fasilitas, termasuk tiga restoran yang menyajikan masakan internasional, layanan kamar 24 jam, layanan kebersihan harian, dan layanan concierge. Terletak di area Kudai, hotel ini memudahkan akses ke Masjidil Haram dan tempat-tempat suci lainnya di Mekkah, menjadikannya pilihan ideal untuk para tamu yang menginginkan kenyamanan dan kemudahan selama kunjungan mereka.",
        facilities: [
          "AC",
          "WiFi",
          "Restoran",
          "TV",
          "Layanan Kamar",
          "Kamar Mandi Dalam",
          "Ramah Disabilitas",
        ],
        check_in_time: undefined,
        check_out_time: undefined,
        address: "Jl. Umm Al Qura Jabal Al Kaaba, Mekkah 21955 Arab Saudi",
        distance_to_masjid: 200,
        food_type: "Prasmanan",
        food_amount: 3,
        food_menu: undefined,
      },
      madinah: {
        id: "taiba-madinah",
        city: "Madinah",
        hotel_name: "Taiba Madinah",
        star_rating: 4,
        duration: 3,
        images: [
          {
            id: "1",
            src: "/assets/image/hotel/madinah/taiba-madinah/exterior-taiba-madinah.jpg",
            category: "Eksterior",
          },
          {
            id: "2",
            src: "/assets/image/hotel/madinah/taiba-madinah/bedroom-taiba-madinah-1.jpg",
            category: "Kamar",
          },
          {
            id: "3",
            src: "/assets/image/hotel/madinah/taiba-madinah/bedroom-taiba-madinah-2.jpg",
            category: "Kamar",
          },
          {
            id: "4",
            src: "/assets/image/hotel/madinah/taiba-madinah/bedroom-taiba-madinah-3.jpg",
            category: "Kamar Mandi",
          },
          {
            id: "5",
            src: "/assets/image/hotel/madinah/taiba-madinah/bedroom-taiba-madinah-4.jpg",
            category: "Kamar Mandi",
          },
          {
            id: "6",
            src: "/assets/image/hotel/madinah/taiba-madinah/restaurant-taiba-madinah-1.jpg",
            category: "Restoran",
          },
        ],
        google_maps_link_noembed: "https://maps.app.goo.gl/a822gFM3TKnuC1PN6",
        google_maps_link:
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3631.5807548737257!2d39.6041507!3d24.4653268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdc7937243470f%3A0x22f2e9d9cebeb0a6!2sTaiba%20Madinah%20Hotel!5e0!3m2!1sid!2sid!4v1737176215613!5m2!1sid!2sid",
        google_review_link:
          "https://www.google.com/travel/search?q=Taibah%20Madinah&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499704%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72749231%2C72760080%2C72808078&hl=id-ID&gl=id&cs=1&ssta=1&qs=CAEyE0Nnb0lwdUg2OVp5N3V2a2lFQUU4AkIJCaawvs7Z6fIiQgkJprC-ztnp8iI&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiAyO7U5e-JAxUAAAAAHQAAAAAQFw&ts=CAESCAoCCAMKAggDGkcKKRInMiUweDE1YmRjNzkzNzI0MzQ3MGY6MHgyMmYyZTlkOWNlYmViMGE2EhoSFAoHCOgPEAwYBhIHCOgPEAwYBxgBMgIQAA%3D%3D",
        description:
          "Hotel Taiba Madinah adalah hotel yang terletak strategis di jantung kota Madinah, Arab Saudi, hanya beberapa menit berjalan kaki dari Masjid Nabawi. Hotel ini menawarkan akomodasi modern dengan berbagai pilihan kamar, termasuk kamar superior dan suite, yang dilengkapi dengan fasilitas seperti TV layar datar, minibar, dan akses Wi-Fi gratis. Tamu dapat menikmati berbagai fasilitas, termasuk restoran yang menyajikan masakan internasional, layanan kamar 24 jam, dan pusat kebugaran. Hotel ini juga memiliki akses mudah ke berbagai destinasi penting di Madinah, menjadikannya pilihan ideal bagi para tamu yang mencari kenyamanan dan kemudahan selama kunjungan mereka.",
        facilities: [
          "AC",
          "WiFi",
          "TV",
          "Restoran",
          "Layanan Kamar",
          "Kamar Mandi Dalam",
          "Ramah Disabilitas",
        ],
        check_in_time: undefined,
        check_out_time: undefined,
        address:
          "Jl. Omer Bin Khattab (Al-anbariyah), Madinah 41422 Arab Saudi",
        distance_to_masjid: 500,
        food_type: "Prasmanan",
        food_amount: 3,
        food_menu: undefined,
      },
    },
    bus_details: {
      images: [
        {
          id: "1",
          src: "/assets/image/transportation/bus/saptco-economy-1.jpg",
          category: undefined,
        },
        {
          id: "2",
          src: "/assets/image/transportation/bus/saptco-economy-2.jpg",
          category: undefined,
        },
        {
          id: "3",
          src: "/assets/image/transportation/bus/saptco-economy-3.jpg",
          category: undefined,
        },
      ],
      id: "sapico-reguler",
      provider: "Saptco",
      bus_type: "Economy-Class",
      seat_amount: 45,
    },
    promos: [
      {
        imageUrl: "/assets/promo/promo-diskon-3-juta.jpg",
        link: "promo-3-juta",
      },
    ],
    addons: [
      {
        title: "Kota Al-Ula",
        category: "Wisata Kota",
        price: 2000000,
        places: ["Jabal Ikmah", "Museum Al-Ula", "Makam Nabi Hud"],
        imageUrl: "/assets/image/voucher/al-ula-4.jpeg",
      },
      {
        title: "Kereta Cepat",
        category: "Transportasi",
        price: 900000,
        places: ["Kereta Cepat"],
        imageUrl: "/assets/image/packages-umrah/package-detail-1.png",
      },
      {
        title: "Makan Romansiah + Cable Car",
        category: "Wisata Kota",
        price: 1000000,
        places: ["Restoran Al Romansiah", "Cable Car"],
        imageUrl: "/assets/image/voucher/al-romansiah-restaurant-2.jpeg",
      },
      {
        title: "Asia Restaurant Jeddah + Speed Boat",
        category: "Wisata Kota",
        price: 1500000,
        places: ["Restoran Asia Jeddah", "Speed Boat"],
        imageUrl: "/assets/image/voucher/asia-restaurant-jeddah-1.jpg",
      },
    ],
    itineraries: [
      {
        id: "1",
        nth: 1,
        city: "Madinah",
        days: [
          {
            id: "1",
            nth: 1,
            title: "Keberangkatan dari Jakarta",
            widgets: [],
            description:
              "Jamaah berkumpul di Bandara Soekarno-Hatta untuk proses check in tiket, imigrasi dan bagasi. Sebelum keberangkatan akan ada briefing dan doa bersama.",
          },
          {
            id: "2",
            nth: 2,
            title: "Mendarat di Jeddah lalu ke Madinah",
            widgets: [
              {
                id: "1",
                type: "Transport",
                transportWith: "Bus",
                from: "Bandara King Abdul Aziz Jeddah",
                to: "Hotel Taiba Madinah",
              },
              {
                id: "2",
                type: "Hotel",
                hotel_name: "Taiba Madinah",
              },
              {
                id: "3",
                type: "Information",
                description:
                  "Tidak ada aktivitas hari ini. Silakan nikmati waktu dengan beristirahat",
              },
            ],
            description:
              "Jamaah mendarat di Bandara King Abdul Aziz di Jeddah lalu melanjutkan perjalanan dengan transportasi darat. Sesampainya di Madinah, Jamaah akan melakukan proses check in hotel lalu beristirahat untuk kegiatan esok hari.",
          },
          {
            id: "3",
            nth: 3,
            title: "City Tour Madinah",
            widgets: [],
            description:
              "Jamaah melakukan perjalanan mengelilingi kota Madinah dan mengunjungi beberapa destinasi wisata. Seperti: Masjid Quba, Jabal Uhud dan Kebun Kurma.",
          },
          {
            id: "4",
            nth: 4,
            title: "Ziarah di Madinah",
            widgets: [],
            description:
              "Jamaah melakukan ziarah di Raudah, Masjid Nabawi dan sekitaran Masjid Nabawi (Saqifah Bani Sa’idah, Masjid Ghamamah, Makam Rasulullah SAW, dan Makam Baqi).",
          },
          {
            id: "5",
            nth: 5,
            title: "Perjalanan Madinah - Makkah",
            widgets: [
              {
                id: "1",
                type: "Transport",
                transportWith: "Bus",
                from: "Hotel Taiba Madinah",
                to: "Hotel Anjum Makkah",
              },
              {
                id: "2",
                type: "Hotel",
                hotel_name: "Anjum",
              },
              {
                id: "3",
                type: "Information",
                description:
                  "Tidak ada aktivitas hari ini. Silahkan nikmati waktu dengan beristirahat.",
              },
            ],
            description:
              "Jamaah melakukan proses check out Hotel di Madinah, lalu melanjutkan perjalanan ke Makkah dengan transportasi darat.Sesampainya di Makkah, Jamaah langsung melakukan proses check in Hotel di Makkah lalu makan malam dan beristirahat untuk ibadah Umrah besok hari.",
          },
        ],
        images: [
          {
            id: "1",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: undefined,
          },
          {
            id: "2",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: undefined,
          },
        ],
      },
      {
        id: "2",
        nth: 2,
        city: "Makkah",
        days: [
          {
            id: "1",
            nth: 6,
            title: "Pelaksanaan Ibadah Umrah di Makkah",
            widgets: [],
            description: "Jamaah melaksanakan ibadah Umrah di Masjidil Haram.",
          },
          {
            id: "2",
            nth: 7,
            title: "City Tour Makkah",
            widgets: [],
            description:
              "Jamaah melakukan perjalanan mengelilingi kota Makkah dan mengunjungi beberapa destinasi wisata.",
          },
          {
            id: "3",
            nth: 8,
            title: "Ziarah di Makkah",
            widgets: [],
            description:
              "Jamaah melakukan ziarah di Jabal Tsur, Jabal Nur, Jabal Rahmah, Padang Arafah dan Muzdalifah.",
          },
          {
            id: "4",
            nth: 9,
            title: "Kepulangan menuju Jakarta",
            widgets: [
              {
                id: "1",
                type: "Transport",
                transportWith: "Bus",
                from: "Hotel Anjum Makkah",
                to: "Bandara King Abdul Aziz Jeddah",
              },
            ],
            description:
              "Jamaah melakukan proses check out Hotel di Makkah, lalu melanjutkan perjalanan ke Jeddah dengan transportasi darat.Setelah itu Jamaah Bersiap untuk penerbangan pulang ke Bandara Soekarno-Hatta Jakarta. #BikinTenang",
          },
        ],
        images: [
          {
            id: "1",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: undefined,
          },
          {
            id: "2",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: undefined,
          },
        ],
      },
    ],
  },
  {
    id: "untuk-paket-gold",
    tagline: "Umrah Hemat, Fokus Ibadah",
    thumbnail:
      "/assets/image/packages-umrah/cover-umrah-hemat-fokus-ibadah-silver.jpg",
    type: "Reguler",
    category: "Silver",
    season: "NON RAMADHAN",
    isFastTrain: false,
    city_departure: [
      {
        city: "Jakarta",
        route: "CGK-JED",
      },
    ],
    duration: "9 Hari",
    package: "Silver",
    down_payment: 7,
    order_url: `${whatsappLink}Assalamualaikum%2C%20Saya%20tertarik%20untuk%20melakukan%20pemesanan%20paket%20Silver%20Umrah%20Hemat%2C%20Fokus%20Ibadah.%20Saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20paket%20tersebut.%0A%0ATerima%20kasih%20atas%20bantuannya.%20Saya%20tunggu%20informasi%20lebih%20lanjut.`,
    departure_date: [
      {
        date: "2025-02-18T10:00:00+07:00",
        status: "expired",
      },
      {
        date: "2025-03-29T10:00:00+07:00",
        status: "expired",
      },
      {
        date: "2025-04-24T10:00:00+07:00",
        status: "active",
      },
      {
        date: "2025-04-15T10:00:00+07:00",
        status: "closing-umrah",
      },
      {
        date: "2025-05-01T10:00:00+07:00",
        status: "musim-haji",
      },
      {
        date: "2025-06-01T10:00:00+07:00",
        status: "musim-haji",
      },
      {
        date: "2025-07-30T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-08-17T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-09-21T10:00:00+07:00",
        status: "coming-soon",
      },
    ],
    doublePrice: 26100000,
    triplePrice: 24600000,
    quadPrice: 23100000,
    infantPrice: undefined,
    doubleFinalPrice: undefined,
    tripleFinalPrice: undefined,
    quadFinalPrice: undefined,
    infantFinalPrice: undefined,
    flight_details: {
      wisata_flight: [
        {
          flight_number: "GA-822",
          duration: 560,
          airport_name_departure: "Soekarno Hatta International Airport",
          airport_terminal_departure: "Terminal 3 Internasional",
          airport_code_departure: "CGK",
          airport_city_departure: "Jakarta",
          airport_name_arrival: "King Abdulaziz International Airport",
          airport_terminal_arrival: "2",
          airport_code_arrival: "JED",
          airport_city_arrival: "Jeddah",
          departure_datetime: "2024-03-10T10:00:00+07:00",
          class: "Economy",
          flight_type: "Direct",
          airline: "Lion Air",
          aircraft_type: "Airbus",
          seat_layout: "2-4-2",
          baggage_allowance: 20,
          cabin_baggage: 7,
          airline_logo: "Lion Air",
          skytrax: "Low Cost",
          rating: "3",
          transit: undefined,
          transit_datetime: undefined,
        },
      ],
      departure_flight: {
        flight_number: "GA-822",
        duration: 560,
        airport_name_departure: "Soekarno Hatta International Airport",
        airport_terminal_departure: "Terminal 3 Internasional",
        airport_code_departure: "CGK",
        airport_city_departure: "Jakarta",
        airport_name_arrival: "King Abdulaziz International Airport",
        airport_terminal_arrival: "2",
        airport_code_arrival: "JED",
        airport_city_arrival: "Jeddah",
        departure_datetime: "2024-03-10T10:00:00+07:00",
        class: "Economy",
        flight_type: "Direct",
        airline: "Lion Air",
        aircraft_type: "Airbus",
        seat_layout: "2-4-2",
        baggage_allowance: 20,
        cabin_baggage: 7,
        airline_logo: "Lion Air",
        skytrax: "Low Cost",
        rating: "3",
        transit: {
          flight_number: "GA-822",
          duration: 560,
          airport_name_departure: "Soekarno Hatta International Airport",
          airport_terminal_departure: "Terminal 3 Internasional",
          airport_code_departure: "CGK",
          airport_city_departure: "Jakarta",
          airport_name_arrival: "King Abdulaziz International Airport",
          airport_terminal_arrival: "2",
          airport_code_arrival: "JED",
          airport_city_arrival: "Jeddah",
          departure_datetime: "2024-03-10T10:00:00+07:00",
          class: "Economy",
          flight_type: "Direct",
          airline: "Lion Air",
          aircraft_type: "Airbus",
          seat_layout: "2-4-2",
          baggage_allowance: 20,
          cabin_baggage: 7,
          airline_logo: "Lion Air",
          skytrax: "Low Cost",
          rating: "3",
          transit: undefined,
          transit_datetime: undefined,
        },
        transit_datetime: "2024-03-10T23:00:00+07:00",
      },
      return_flight: {
        flight_number: undefined,
        duration: 510,
        airport_name_departure: "King Abdulaziz International Airport",
        airport_terminal_departure: "2",
        airport_code_departure: "JED",
        airport_city_departure: "Jeddah",
        airport_name_arrival: "Soekarno Hatta International Airport",
        airport_terminal_arrival: "Terminal 3 Internasional",
        airport_code_arrival: "CGK",
        airport_city_arrival: "Jakarta",
        departure_datetime: undefined,
        class: "Economy",
        flight_type: "Direct",
        airline: "Garuda Indonesia",
        aircraft_type: "Airbus",
        seat_layout: "2-4-2",
        baggage_allowance: 20,
        cabin_baggage: 7,
        airline_logo: "Lion Air",
        skytrax: "Full Service",
        rating: "5",
        transit: undefined,
        transit_datetime: undefined,
      },
    },
    hotel_details: {
      wisata: [
        {
          id: "park-hyatt-dubai",
          city: "Dubai",
          hotel_name: "Park Hyatt",
          star_rating: 5,
          duration: 4,
          images: [
            {
              id: "1",
              src: "/assets/image/packages-umrah/package-detail-1.png",
              category: "Kamar",
            },
          ],
          google_maps_link_noembed: "https://maps.app.goo.gl/qZY9Dp2uZMRRrFLg9",
          google_maps_link:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.6725209251936!2d39.82396827526694!3d21.402795380341743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cc3bae24752d%3A0xca38e13e3889c0e7!2sLe%20M%C3%A9ridien%20Towers%20Makkah!5e0!3m2!1sid!2sid!4v1736987502086!5m2!1sid!2sid",
          google_review_link:
            "https://www.google.com/maps/place/Le+M%C3%A9ridien+Towers+Makkah/@21.4027954,39.8239683,17z/data=!4m11!3m10!1s0x15c3cc3bae24752d:0xca38e13e3889c0e7!5m2!4m1!1i2!8m2!3d21.4027954!4d39.8265432!9m1!1b1!16s%2Fg%2F1x5bbngk?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D",
          description:
            "Hotel Dubai bintang 5 dengan fasilitas lengkap dan pemandangan indah.",
          facilities: ["AC", "WiFi", "Kolam Renang", "Gym", "Spa"],
          check_in_time: "2024-03-10T13:00:00+07:00",
          check_out_time: "2024-03-16T11:00:00+07:00",
          address: "Jl. Le Meridien, Mekkah",
          distance_to_masjid: 200,
          food_type: "Prasmanan",
          food_amount: 3,
          food_menu: "Makanan Internasional",
        },
      ],
      makkah: {
        id: "le-meridien-tower-mekkah",
        city: "Mekkah",
        hotel_name: "Le Meridien Tower",
        star_rating: 4,
        duration: 4,
        images: [
          {
            id: "1",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: "Standard",
          },
          {
            id: "2",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: "Deluxe",
          },
          {
            id: "3",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: "Suite",
          },
          {
            id: "4",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: "Executive Suite",
          },
        ],
        google_maps_link_noembed: "https://maps.app.goo.gl/qZY9Dp2uZMRRrFLg9",
        google_maps_link:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.6725209251936!2d39.82396827526694!3d21.402795380341743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cc3bae24752d%3A0xca38e13e3889c0e7!2sLe%20M%C3%A9ridien%20Towers%20Makkah!5e0!3m2!1sid!2sid!4v1736987502086!5m2!1sid!2sid",
        google_review_link:
          "https://www.google.com/maps/place/Le+M%C3%A9ridien+Towers+Makkah/@21.4027954,39.8239683,17z/data=!4m11!3m10!1s0x15c3cc3bae24752d:0xca38e13e3889c0e7!5m2!4m1!1i2!8m2!3d21.4027954!4d39.8265432!9m1!1b1!16s%2Fg%2F1x5bbngk?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D",
        description:
          "Hotel bintang 5 dengan fasilitas lengkap dan pemandangan indah.",
        facilities: ["AC", "WiFi", "Kolam Renang", "Gym", "Spa"],
        check_in_time: undefined,
        check_out_time: undefined,
        address: "Jl. Le Meridien, Mekkah",
        distance_to_masjid: 200,
        food_type: "Prasmanan",
        food_amount: 3,
        food_menu: "Makanan Internasional",
      },
      madinah: {
        id: "hayah-golden-madinah",
        city: "Madinah",
        hotel_name: "Hayah Golden",
        star_rating: 5,
        duration: 3,
        images: [
          {
            id: "1",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: "Standard",
          },
          {
            id: "2",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: "Standard",
          },
          {
            id: "3",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: "Standard",
          },
          {
            id: "4",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: "Family Room",
          },
        ],
        google_maps_link_noembed: "https://maps.app.goo.gl/HrrmnzzfNheNzpfC8",
        google_maps_link:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.466232858313!2d39.60216347521062!3d24.4692975781867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf046d507ae3%3A0x327fc68978ea7c68!2sHAYAH%20GOLDEN!5e0!3m2!1sid!2sid!4v1736987628731!5m2!1sid!2sid",
        google_review_link:
          "https://www.google.com/maps/place/HAYAH+GOLDEN/@24.4692976,39.6021635,17z/data=!4m11!3m10!1s0x15bdbf046d507ae3:0x327fc68978ea7c68!5m2!4m1!1i2!8m2!3d24.4692976!4d39.6047384!9m1!1b1!16s%2Fg%2F1v1ks3h6?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D",
        description:
          "Hotel yang nyaman dan tenang di Madinah, dekat dengan Masjid Nabawi.",
        facilities: ["AC", "WiFi", "TV", "Kamar Mandi Dalam"],
        check_in_time: "2024-03-17T14:00:00+07:00",
        check_out_time: "2024-03-20T11:00:00+07:00",
        address: "Jl. Hayah Golden, Madinah",
        distance_to_masjid: 500,
        food_type: "Prasmanan",
        food_amount: 3,
        food_menu: "Makanan Khas Arab",
      },
    },
    bus_details: {
      images: [
        {
          id: "1",
          src: "/assets/image/packages-umrah/package-detail-1.png",
          category: "Standard",
        },
        {
          id: "2",
          src: "/assets/image/packages-umrah/package-detail-1.png",
          category: "Standard",
        },
      ],
      id: "sapico-reguler",
      provider: "Sapico",
      bus_type: "Reguler",
      seat_amount: 45,
    },
    promos: [
      {
        imageUrl: "/assets/promo/promo-diskon-3-juta.jpg",
        link: "promo-3-juta",
      },
    ],
    addons: [
      {
        title: "Kota Thaif",
        category: "Wisata Kota",
        price: 500000,
        places: ["Kebun Buah", "Gunung Al-Hada", "Al-Ruddaf"],
        imageUrl: "/assets/image/packages-umrah/package-detail-1.png",
      },
      {
        title: "Kota Al-Ula",
        category: "Wisata Kota",
        price: 500000,
        places: ["Jabal Ikmah", "Museum Al-Ula", "Makam Nabi Hud"],
        imageUrl: "/assets/image/packages-umrah/package-detail-1.png",
      },
      {
        title: "Jeddah Speed Boat",
        category: "Wisata Kota",
        price: 500000,
        places: ["Laut Merah", "Speed Boat"],
        imageUrl: "/assets/image/packages-umrah/package-detail-1.png",
      },
    ],
    itineraries: [
      {
        id: "1",
        nth: 1,
        city: "Madinah",
        days: [
          {
            id: "1",
            nth: 1,
            title: "Keberangkatan dari Jakarta",
            widgets: [
              {
                id: "9dd71ec3-985e-408a-a542-5bce9f7c047a",
                type: "Transport",
                transportWith: "Bus",
                from: "Bandara Dubai International Airport",
                to: "Park Hyatt Hotel",
              },
              {
                id: "9dd71ec3-a1ca-4783-9843-59acf4804a40",
                type: "Information",
                description: "Lorem ipsum dolor sit amet",
              },
            ],
            description:
              "Selamat datang di Dubai. Setelah kedatangan Anda, Anda akan dipindahkan ke hotel untuk proses check-in. Anda dapat menikmati hari Anda dengan santai atau menjelajahi kota sesuai dengan keinginan Anda, mengunjungi beberapa tempat menarik seperti Burj Khalifa, Palm Jumeirah, dan lainnya. Setelah hari yang luar biasa, kembali ke hotel untuk istirahat semalam.",
          },
          {
            id: "2",
            nth: 2,
            title: "Mendarat di Jeddah lalu ke Madinah",
            widgets: [
              {
                id: "9dd71ec3-985e-408a-a542-5bce9f7c047a",
                type: "Transport",
                transportWith: "Bus",
                from: "Bandara Dubai International Airport",
                to: "Park Hyatt Hotel",
              },
              {
                id: "9dd71ec3-a1ca-4783-9843-59acf4804a40",
                type: "Information",
                description: "Lorem ipsum dolor sit amet",
              },
            ],
            description:
              "Selamat datang di Dubai. Setelah kedatangan Anda, Anda akan dipindahkan ke hotel untuk proses check-in. Anda dapat menikmati hari Anda dengan santai atau menjelajahi kota sesuai dengan keinginan Anda, mengunjungi beberapa tempat menarik seperti Burj Khalifa, Palm Jumeirah, dan lainnya. Setelah hari yang luar biasa, kembali ke hotel untuk istirahat semalam.",
          },
          {
            id: "3",
            nth: 3,
            title: "City Tour Madinah",
            widgets: [
              {
                id: "9dd71ec3-985e-408a-a542-5bce9f7c047a",
                type: "Transport",
                transportWith: "Bus",
                from: "Bandara Dubai International Airport",
                to: "Park Hyatt Hotel",
              },
              {
                id: "9dd71ec3-a1ca-4783-9843-59acf4804a40",
                type: "Information",
                description: "Lorem ipsum dolor sit amet",
              },
            ],
            description:
              "Selamat datang di Dubai. Setelah kedatangan Anda, Anda akan dipindahkan ke hotel untuk proses check-in. Anda dapat menikmati hari Anda dengan santai atau menjelajahi kota sesuai dengan keinginan Anda, mengunjungi beberapa tempat menarik seperti Burj Khalifa, Palm Jumeirah, dan lainnya. Setelah hari yang luar biasa, kembali ke hotel untuk istirahat semalam.",
          },
          {
            id: "4",
            nth: 4,
            title: "Ziarah di Madinah",
            widgets: [
              {
                id: "9dd71ec3-985e-408a-a542-5bce9f7c047a",
                type: "Transport",
                transportWith: "Bus",
                from: "Bandara Dubai International Airport",
                to: "Park Hyatt Hotel",
              },
              {
                id: "9dd71ec3-a1ca-4783-9843-59acf4804a40",
                type: "Information",
                description: "Lorem ipsum dolor sit amet",
              },
            ],
            description:
              "Jamaah melakukan ziarah di Raudah, Masjid Nabawi dan sekitaran Masjid Nabawi (Saqifah Bani Sa`idah, Masjid Ghamamah, Makam Rasulullah SAW, dan Makam Baqi).",
          },
          {
            id: "5",
            nth: 5,
            title: "Perjalanan Madinah - Makkah",
            widgets: [
              {
                id: "9dd71ec3-985e-408a-a542-5bce9f7c047a",
                type: "Transport",
                transportWith: "Bus",
                from: "Bandara Dubai International Airport",
                to: "Park Hyatt Hotel",
              },
              {
                id: "9dd71ec3-a1ca-4783-9843-59acf4804a40",
                type: "Information",
                description: "Lorem ipsum dolor sit amet",
              },
            ],
            description:
              "Jamaah melakukan ziarah di Raudah, Masjid Nabawi dan sekitaran Masjid Nabawi (Saqifah Bani Sa`idah, Masjid Ghamamah, Makam Rasulullah SAW, dan Makam Baqi).",
          },
        ],
        images: [
          {
            id: "1",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: undefined,
          },
          {
            id: "2",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: undefined,
          },
        ],
      },
      {
        id: "2",
        nth: 1,
        city: "Makkah",
        days: [
          {
            id: "1",
            nth: 1,
            title: "Pelaksanaan Ibadah Umrah di Makkah",
            widgets: [
              {
                id: "9dd71ec3-985e-408a-a542-5bce9f7c047a",
                type: "Transport",
                transportWith: "Bus",
                from: "Bandara Dubai International Airport",
                to: "Park Hyatt Hotel",
              },
              {
                id: "9dd71ec3-a1ca-4783-9843-59acf4804a40",
                type: "Information",
                description: "Lorem ipsum dolor sit amet",
              },
            ],
            description:
              "Selamat datang di Dubai. Setelah kedatangan Anda, Anda akan dipindahkan ke hotel untuk proses check-in. Anda dapat menikmati hari Anda dengan santai atau menjelajahi kota sesuai dengan keinginan Anda, mengunjungi beberapa tempat menarik seperti Burj Khalifa, Palm Jumeirah, dan lainnya. Setelah hari yang luar biasa, kembali ke hotel untuk istirahat semalam.",
          },
          {
            id: "2",
            nth: 2,
            title: "City Tour Makkah",
            widgets: [
              {
                id: "9dd71ec3-985e-408a-a542-5bce9f7c047a",
                type: "Transport",
                transportWith: "Bus",
                from: "Bandara Dubai International Airport",
                to: "Park Hyatt Hotel",
              },
              {
                id: "9dd71ec3-a1ca-4783-9843-59acf4804a40",
                type: "Information",
                description: "Lorem ipsum dolor sit amet",
              },
            ],
            description:
              "Selamat datang di Dubai. Setelah kedatangan Anda, Anda akan dipindahkan ke hotel untuk proses check-in. Anda dapat menikmati hari Anda dengan santai atau menjelajahi kota sesuai dengan keinginan Anda, mengunjungi beberapa tempat menarik seperti Burj Khalifa, Palm Jumeirah, dan lainnya. Setelah hari yang luar biasa, kembali ke hotel untuk istirahat semalam.",
          },
          {
            id: "3",
            nth: 3,
            title: "Ziarah di Makkah",
            widgets: [
              {
                id: "9dd71ec3-985e-408a-a542-5bce9f7c047a",
                type: "Transport",
                transportWith: "Bus",
                from: "Bandara Dubai International Airport",
                to: "Park Hyatt Hotel",
              },
              {
                id: "9dd71ec3-a1ca-4783-9843-59acf4804a40",
                type: "Information",
                description: "Lorem ipsum dolor sit amet",
              },
            ],
            description:
              "Selamat datang di Dubai. Setelah kedatangan Anda, Anda akan dipindahkan ke hotel untuk proses check-in. Anda dapat menikmati hari Anda dengan santai atau menjelajahi kota sesuai dengan keinginan Anda, mengunjungi beberapa tempat menarik seperti Burj Khalifa, Palm Jumeirah, dan lainnya. Setelah hari yang luar biasa, kembali ke hotel untuk istirahat semalam.",
          },
          {
            id: "4",
            nth: 4,
            title: "Kepulangan menuju Jakarta",
            widgets: [
              {
                id: "9dd71ec3-985e-408a-a542-5bce9f7c047a",
                type: "Transport",
                transportWith: "Bus",
                from: "Bandara Dubai International Airport",
                to: "Park Hyatt Hotel",
              },
              {
                id: "9dd71ec3-a1ca-4783-9843-59acf4804a40",
                type: "Information",
                description: "Lorem ipsum dolor sit amet",
              },
            ],
            description:
              "Selamat datang di Dubai. Setelah kedatangan Anda, Anda akan dipindahkan ke hotel untuk proses check-in. Anda dapat menikmati hari Anda dengan santai atau menjelajahi kota sesuai dengan keinginan Anda, mengunjungi beberapa tempat menarik seperti Burj Khalifa, Palm Jumeirah, dan lainnya. Setelah hari yang luar biasa, kembali ke hotel untuk istirahat semalam.",
          },
        ],
        images: [
          {
            id: "1",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: undefined,
          },
          {
            id: "2",
            src: "/assets/image/packages-umrah/package-detail-1.png",
            category: undefined,
          },
        ],
      },
    ],
  },
];
