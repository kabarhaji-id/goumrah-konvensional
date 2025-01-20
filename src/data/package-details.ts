import { UmrahPackage } from "@/types/package-details";

const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const promoLink = `${whatsappLink}${encodeURIComponent(
  "Assalamualaikum, " +
    "Saya tertarik untuk melakukan pemesanan paket Umrah melalui Goumrah.id. Saya ingin bertanya lebih lanjut mengenai paket Umrah yang tersedia. " +
    "Terima kasih atas bantuannya. Saya tunggu informasi lebih lanjut.",
)}`;

export const packageDetailData: UmrahPackage[] = [
  {
    id: "umrah-hemat-fokus-ibadah-silver",
    title: "Umrah Hemat",
    tagline: "#FokusIbadah",
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
    order_url: `${whatsappLink}${encodeURIComponent("Assalamualaikum, Saya tertarik untuk melakukan pemesanan paket Silver Umrah Hemat, Fokus Ibadah. Saya ingin bertanya lebih lanjut mengenai paket tersebut. Terima kasih atas bantuannya. Saya tunggu informasi lebih lanjut.")}`,
    departure_date: [
      {
        date: "2025-03-24T10:00:00+07:00",
        status: "expired",
      },
      {
        date: "2025-03-31T10:00:00+07:00",
        status: "expired",
      },
      {
        date: "2025-04-07T10:00:00+07:00",
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
        date: "2025-07-02T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-07-09T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-07-16T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-07-23T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-07-30T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-08-06T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-08-13T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-08-20T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-08-27T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-09-03T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-09-10T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-09-17T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-09-24T10:00:00+07:00",
        status: "coming-soon",
      },
    ],
    doublePrice: 29900000,
    triplePrice: 27900000,
    quadPrice: 25900000,
    infantPrice: undefined,
    doubleFinalPrice: 26900000,
    tripleFinalPrice: 24900000,
    quadFinalPrice: 22900000,
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
        departure_datetime: "2025-04-07T10:00:00+07:00",
        departure_arrivaltime: undefined,
        class: "Economy",
        flight_type: "Transit",
        airline: "Scoot",
        aircraft_type: undefined,
        seat_layout: undefined,
        baggage_allowance: 20,
        cabin_baggage: 10,
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
          departure_arrivaltime: undefined,
          class: "Economy",
          flight_type: "Direct",
          airline: "Scoot",
          aircraft_type: undefined,
          seat_layout: undefined,
          baggage_allowance: 20,
          cabin_baggage: 10,
          airline_logo: "/assets/airlines/scoot.png",
          skytrax: undefined,
          rating: undefined,
          transit: undefined,
          transit_datetime: undefined,
        },
        transit_datetime: "2025-04-07T10:00:00+07:00",
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
        departure_datetime: "2025-04-14T10:00:00+07:00",
        departure_arrivaltime: undefined,
        class: "Economy",
        flight_type: "Transit",
        airline: "Scoot",
        aircraft_type: undefined,
        seat_layout: undefined,
        baggage_allowance: 20,
        cabin_baggage: 10,
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
          departure_arrivaltime: "2025-04-15T10:00:00+07:00",
          class: "Economy",
          flight_type: "Direct",
          airline: "Scoot",
          aircraft_type: undefined,
          seat_layout: undefined,
          baggage_allowance: 20,
          cabin_baggage: 10,
          airline_logo: "/assets/airlines/scoot.png",
          skytrax: undefined,
          rating: undefined,
          transit: undefined,
          transit_datetime: undefined,
        },
        transit_datetime: "2025-04-14T10:00:00+07:00",
      },
    },
    hotel_details: {
      wisata: [],
      makkah: {
        id: "le-meridien-tower-makkah",
        city: "Makkah",
        hotel_name: "Le Meridien Tower",
        star_rating: 5,
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
          "Le Méridien Towers Makkah adalah hotel bintang 5 yang terletak strategis di Makkah, Arab Saudi, hanya 3 menit dari Masjidil Haram dengan layanan antar-jemput gratis 24 jam. Hotel ini menawarkan 647 kamar yang luas dan elegan, termasuk suite diplomatik, suite kerajaan, dan suite kerajaan, yang dilengkapi dengan dapur kecil, TV layar datar, minibar, dan akses Wi-Fi gratis. Tamu dapat menikmati berbagai fasilitas, termasuk tiga restoran yang menyajikan masakan internasional, layanan kamar 24 jam, layanan kebersihan harian, dan layanan concierge. Terletak di area Kudai, hotel ini memudahkan akses ke Masjidil Haram dan tempat-tempat suci lainnya di Makkah, menjadikannya pilihan ideal untuk para tamu yang menginginkan kenyamanan dan kemudahan selama kunjungan mereka.",
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
        star_rating: 4,
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
        distance_to_masjid: 220,
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
      id: "saptco-reguler",
      provider: "Saptco",
      bus_type: "Economy-Class",
      seat_amount: 45,
    },
    promos: [
      {
        imageUrl: "/assets/promo/promo-diskon-3-juta.jpg",
        link: `${promoLink}`,
      },
    ],
    addons: [
      {
        title: "Kota Al-Ula",
        category: "Wisata Kota",
        price: 2000000,
        places: ["Jabal Ikmah", "Elephant Rock", "Maraya"],
        imageUrl: "/assets/image/voucher/al-ula-4.jpeg",
      },
      {
        title: "Kereta Cepat",
        category: "Transportasi",
        price: 900000,
        places: ["Kereta Cepat"],
        imageUrl: "/assets/image/transportation/fast-train/fast-train-3.webp",
      },
      {
        title: "Makan di Romansiah + Cable Car",
        category: "Wisata Kota Thaif",
        price: 1000000,
        places: ["Restoran Al Romansiah", "Cable Car"],
        imageUrl: "/assets/image/voucher/al-romansiah-restaurant-2.jpeg",
      },
      {
        title: "Restoran Asia + Speed Boat",
        category: "Wisata Kota Jeddah",
        price: 1500000,
        places: ["Restoran Asia Jeddah", "Speed Boat"],
        imageUrl: "/assets/image/voucher/asia-restaurant-jeddah-1.jpg",
      },
    ],
    itineraries: [
      {
        id: "1",
        nth: 1,
        duration: 3,
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
        ],
        images: [
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-7.jpg",
            category: undefined,
          },
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-2.jpg",
            category: undefined,
          },
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-8.jpg",
            category: undefined,
          },
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-9.jpg",
            category: undefined,
          },
        ],
      },
      {
        id: "2",
        nth: 2,
        duration: 4,
        city: "Makkah",
        days: [
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
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-2.jpg",
            category: undefined,
          },
          {
            id: "2",
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-3.jpg",
            category: undefined,
          },
          {
            id: "3",
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-4.jpg",
            category: undefined,
          },
          {
            id: "4",
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-1.jpg",
            category: undefined,
          },
        ],
      },
    ],
    importantNotes: [],
  },
  {
    id: "umrah-berkah-fokus-ibadah-gold",
    title: "Umrah Berkah",
    tagline: "#FokusIbadah",
    thumbnail:
      "/assets/image/packages-umrah/cover-umrah-berkah-fokus-ibadah-gold.jpg",
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
    order_url: `${whatsappLink}Assalamualaikum%2C%20Saya%20tertarik%20untuk%20melakukan%20pemesanan%20paket%20Gold%20Umrah%20Berkah%2C%20Fokus%20Ibadah.%20Saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20paket%20tersebut.%0A%0ATerima%20kasih%20atas%20bantuannya.%20Saya%20tunggu%20informasi%20lebih%20lanjut.`,
    departure_date: [
      {
        date: "2025-03-20T10:00:00+07:00",
        status: "expired",
      },
      {
        date: "2025-03-27T10:00:00+07:00",
        status: "expired",
      },
      {
        date: "2025-04-10T10:00:00+07:00",
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
        date: "2025-07-07T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-07-14T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-07-21T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-07-28T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-08-04T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-08-11T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-08-18T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-08-25T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-09-01T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-09-08T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-09-15T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-09-22T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-09-29T10:00:00+07:00",
        status: "coming-soon",
      },
    ],
    doublePrice: 39900000,
    triplePrice: 36900000,
    quadPrice: 33900000,
    infantPrice: undefined,
    doubleFinalPrice: 34500000,
    tripleFinalPrice: 31500000,
    quadFinalPrice: 28500000,
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
        departure_datetime: "2025-04-10T10:00:00+07:00",
        departure_arrivaltime: undefined,
        class: "Economy",
        flight_type: "Direct",
        airline: "Saudia Airlines",
        aircraft_type: undefined,
        seat_layout: undefined,
        baggage_allowance: 23,
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
        airport_terminal_arrival: "Terminal 3 Internasional",
        airport_code_arrival: "CGK",
        airport_city_arrival: "Jakarta",
        departure_datetime: "2025-04-17T10:00:00+07:00",
        departure_arrivaltime: undefined,
        class: "Economy",
        flight_type: "Direct",
        airline: "Saudia Airlines",
        aircraft_type: undefined,
        seat_layout: undefined,
        baggage_allowance: 23,
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
        star_rating: 5,
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
          "Le Méridien Towers Makkah adalah hotel bintang 5 yang terletak strategis di Makkah, Arab Saudi, hanya 3 menit dari Masjidil Haram dengan layanan antar-jemput gratis 24 jam. Hotel ini menawarkan 647 kamar yang luas dan elegan, termasuk suite diplomatik, suite kerajaan, dan suite kerajaan, yang dilengkapi dengan dapur kecil, TV layar datar, minibar, dan akses Wi-Fi gratis. Tamu dapat menikmati berbagai fasilitas, termasuk tiga restoran yang menyajikan masakan internasional, layanan kamar 24 jam, layanan kebersihan harian, dan layanan concierge. Terletak di area Kudai, hotel ini memudahkan akses ke Masjidil Haram dan tempat-tempat suci lainnya di Makkah, menjadikannya pilihan ideal untuk para tamu yang menginginkan kenyamanan dan kemudahan selama kunjungan mereka.",
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
        address: "Jl. Umm Al Qura Jabal Al Kaaba, Makkah 21955 Arab Saudi",
        distance_to_masjid: 200,
        food_type: "Prasmanan",
        food_amount: 3,
        food_menu: undefined,
      },
      madinah: {
        id: "taiba-madinah",
        city: "Madinah",
        hotel_name: "Taiba Madinah",
        star_rating: 5,
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
        distance_to_masjid: 250,
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
      id: "saptco-reguler",
      provider: "Saptco",
      bus_type: "Economy-Class",
      seat_amount: 45,
    },
    promos: [
      {
        imageUrl: "/assets/promo/promo-diskon-3-juta.jpg",
        link: `${promoLink}`,
      },
    ],
    addons: [
      {
        title: "Kota Al-Ula",
        category: "Wisata Kota",
        price: 2000000,
        places: ["Jabal Ikmah", "Elephant Rock", "Maraya"],
        imageUrl: "/assets/image/voucher/al-ula-4.jpeg",
      },
      {
        title: "Kereta Cepat",
        category: "Transportasi",
        price: 900000,
        places: ["Kereta Cepat"],
        imageUrl: "/assets/image/transportation/fast-train/fast-train-3.webp",
      },
      {
        title: "Makan di Romansiah + Cable Car",
        category: "Wisata Kota Thaif",
        price: 1000000,
        places: ["Restoran Al Romansiah", "Cable Car"],
        imageUrl: "/assets/image/voucher/al-romansiah-restaurant-2.jpeg",
      },
      {
        title: "Restoran Asia + Speed Boat",
        category: "Wisata Kota Jeddah",
        price: 1500000,
        places: ["Restoran Asia Jeddah", "Speed Boat"],
        imageUrl: "/assets/image/voucher/asia-restaurant-jeddah-1.jpg",
      },
    ],
    itineraries: [
      {
        id: "1",
        nth: 1,
        duration: 3,
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
        ],
        images: [
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-7.jpg",
            category: undefined,
          },
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-2.jpg",
            category: undefined,
          },
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-8.jpg",
            category: undefined,
          },
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-9.jpg",
            category: undefined,
          },
        ],
      },
      {
        id: "2",
        nth: 2,
        duration: 4,
        city: "Makkah",
        days: [
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
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-2.jpg",
            category: undefined,
          },
          {
            id: "2",
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-3.jpg",
            category: undefined,
          },
          {
            id: "3",
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-4.jpg",
            category: undefined,
          },
          {
            id: "4",
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-1.jpg",
            category: undefined,
          },
        ],
      },
    ],
    importantNotes: [],
  },
  {
    id: "umrah-cerdas-plus-wisata-turkiye-gold",
    title: "Umrah Cerdas, Plus Wisata Turkiye",
    tagline: undefined,
    thumbnail:
      "/assets/image/packages-umrah/cover-umrah-cerdas-plus-wisata-turki-gold.jpg",
    type: "Plus",
    category: "Gold",
    season: "NON RAMADHAN",
    isFastTrain: false,
    city_departure: [
      {
        city: "Jakarta",
        route: "CGK-JED",
      },
    ],
    duration: "16 Hari",
    package: "Gold",
    down_payment: 15,
    order_url: `${whatsappLink}Assalamualaikum%2C%20Saya%20tertarik%20untuk%20melakukan%20pemesanan%20paket%20Gold%20Umrah%20Cerdas%2C%20Plus%20Wisata%20Turki.%20Saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20paket%20tersebut.%0A%0ATerima%20kasih%20atas%20bantuannya.%20Saya%20tunggu%20informasi%20lebih%20lanjut.`,
    departure_date: [
      {
        date: "2025-03-08T10:00:00+07:00",
        status: "expired",
      },
      {
        date: "2025-03-22T10:00:00+07:00",
        status: "expired",
      },
      {
        date: "2025-04-05T10:00:00+07:00",
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
        date: "2025-07-05T10:00:00+07:00",
        status: "coming-soon",
      },
      {
        date: "2025-07-19T10:00:00+07:00",
        status: "coming-soon",
      },
    ],
    doublePrice: 42900000,
    triplePrice: 39900000,
    quadPrice: 36900000,
    infantPrice: undefined,
    doubleFinalPrice: 40500000,
    tripleFinalPrice: 37500000,
    quadFinalPrice: 34500000,
    infantFinalPrice: undefined,
    flight_details: {
      wisata_flight: [
        {
          flight_number: undefined,
          duration: undefined,
          airport_name_departure: "Soekarno Hatta International Airport",
          airport_terminal_departure: "Terminal 3 Internasional",
          airport_code_departure: "CGK",
          airport_city_departure: "Jakarta",
          airport_name_arrival: "Istanbul Airport",
          airport_terminal_arrival: undefined,
          airport_code_arrival: "IST",
          airport_city_arrival: "Istanbul",
          departure_datetime: "2025-04-05T10:00:00+07:00",
          departure_arrivaltime: undefined,
          class: "Economy",
          flight_type: "Direct",
          airline: "Emirates",
          aircraft_type: undefined,
          seat_layout: undefined,
          baggage_allowance: 23,
          cabin_baggage: 7,
          airline_logo: "/assets/airlines/emirates.webp",
          skytrax: "Full Service",
          rating: "4",
          transit: undefined,
          transit_datetime: undefined,
        },
      ],
      departure_flight: {
        flight_number: undefined,
        duration: undefined,
        airport_name_departure: "Istanbul Airport",
        airport_terminal_departure: undefined,
        airport_code_departure: "IST",
        airport_city_departure: "Istanbul",
        airport_name_arrival: "King Abdulaziz International Airport",
        airport_terminal_arrival: undefined,
        airport_code_arrival: "JED",
        airport_city_arrival: "Jeddah",
        departure_datetime: "2025-04-13T10:00:00+07:00",
        departure_arrivaltime: undefined,
        class: "Economy",
        flight_type: "Direct",
        airline: "Emirates",
        aircraft_type: undefined,
        seat_layout: undefined,
        baggage_allowance: 23,
        cabin_baggage: 7,
        airline_logo: "/assets/airlines/emirates.webp",
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
        airport_terminal_arrival: "Terminal 3 Internasional",
        airport_code_arrival: "CGK",
        airport_city_arrival: "Jakarta",
        departure_datetime: "2025-04-20T10:00:00+07:00",
        departure_arrivaltime: undefined,
        class: "Economy",
        flight_type: "Direct",
        airline: "Emirates",
        aircraft_type: undefined,
        seat_layout: undefined,
        baggage_allowance: 23,
        cabin_baggage: 7,
        airline_logo: "/assets/airlines/emirates.webp",
        skytrax: "Full Service",
        rating: "4",
        transit: undefined,
        transit_datetime: undefined,
      },
    },
    hotel_details: {
      wisata: [
        {
          id: "centro-residences-by-rotana",
          city: "Istanbul",
          hotel_name: "Centro Residences by Rotana or Similar 4*",
          star_rating: 4,
          duration: undefined,
          images: [
            {
              id: "1",
              src: "/assets/image/hotel/wisata/centro-residence/exterior-centro-residence-1.jpg",
              category: "Eksterior",
            },
            {
              id: "2",
              src: "/assets/image/hotel/wisata/centro-residence/bedroom-centro-residence-1.jpg",
              category: "Kamar",
            },
            {
              id: "3",
              src: "/assets/image/hotel/wisata/centro-residence/bedroom-centro-residence-2.jpg",
              category: "Kamar",
            },
            {
              id: "4",
              src: "/assets/image/hotel/wisata/centro-residence/bedroom-centro-residence-3.jpg",
              category: "Kamar",
            },
            {
              id: "5",
              src: "/assets/image/hotel/wisata/centro-residence/lobby-centro-residence-1.jpg",
              category: "Lobby",
            },
          ],
          google_maps_link_noembed: "https://maps.app.goo.gl/HiHQ7UR8fTKuoDNJ8",
          google_maps_link:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376.05226877731616!2d28.81305305679178!3d41.059851559896416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa50aa5f6449f%3A0xa63febb2d296afa3!2sCentro%20WestSide%20by%20Rotana%20Hotel!5e0!3m2!1sid!2sid!4v1737189295380!5m2!1sid!2sid",
          google_review_link:
            "https://www.google.com/maps/place/Centro+WestSide+by+Rotana+Hotel/@41.0598516,28.8130531,20z/data=!4m15!1m2!2m1!1scentro+residences+by+rotana+istanbul+turki!3m11!1s0x14caa50aa5f6449f:0xa63febb2d296afa3!5m2!4m1!1i2!8m2!3d41.0598516!4d28.813474!9m1!1b1!15sCipjZW50cm8gcmVzaWRlbmNlcyBieSByb3RhbmEgaXN0YW5idWwgdHVya2kiA4gBAZIBBWhvdGVs4AEA!16s%2Fg%2F11g6qq1f4d?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D",
          description:
            "Centro Westside by Rotana adalah hotel bintang 4 yang terletak di Istanbul, Turki, menawarkan 152 kamar dan suite bergaya modern dengan berbagai kategori yang fleksibel. Setiap kamar dilengkapi dengan fasilitas seperti dapur kecil, TV layar datar, minibar, dan akses Wi-Fi gratis. Hotel ini menyediakan berbagai fasilitas, termasuk tiga pilihan tempat makan dengan area duduk di luar ruangan, lima ruang pertemuan berteknologi tinggi, pusat kebugaran lengkap, tiga ruang perawatan spa, dan kolam renang indoor yang besar. Terletak di distrik Bağcılar, hotel ini berdekatan dengan Mall of Istanbul dan memiliki akses mudah ke jalan raya menuju Uni Eropa dan bandara baru, menjadikannya pilihan ideal bagi wisatawan bisnis maupun rekreasi yang mencari kenyamanan dan aksesibilitas selama kunjungan mereka ke Istanbul.",
          facilities: [
            "AC",
            "TV",
            "WiFi",
            "Restoran",
            "Kolam Renang",
            "Lift",
            "Layanan Kamar",
            "Kamar Mandi Dalam",
          ],
          check_in_time: undefined,
          check_out_time: undefined,
          address:
            "Tasocagi Yolu Caddesi No. 39/A Mahmutbey Mah., Istanbul 34218 Turki",
          distance_to_masjid: 200,
          food_type: "Prasmanan",
          food_amount: undefined,
          food_menu: undefined,
        },
        {
          id: "double-tree-by-hilton",
          city: "Cappadocia",
          hotel_name: "DoubleTree by Hilton or Similar 5*",
          star_rating: 5,
          duration: undefined,
          images: [
            {
              id: "1",
              src: "/assets/image/hotel/wisata/doubletree-by-hilton/exterior-doubletree-1.jpg",
              category: "Eksterior",
            },
            {
              id: "2",
              src: "/assets/image/hotel/wisata/doubletree-by-hilton/bedroom-doubletree-1.jpg",
              category: "Kamar",
            },
            {
              id: "3",
              src: "/assets/image/hotel/wisata/doubletree-by-hilton/bedroom-doubletree-2.jpg",
              category: "Kamar",
            },
          ],
          google_maps_link_noembed: "https://maps.app.goo.gl/5gJChztf5kY7Mdc49",
          google_maps_link:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.1279209645477!2d34.82762701144287!3d38.7148719573357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a67321f06cbc1%3A0xda73f7fff29123b6!2sDoubleTree%20by%20Hilton%20Hotel%20Avanos%20-%20Cappadocia!5e0!3m2!1sid!2sid!4v1737189678019!5m2!1sid!2sid",
          google_review_link:
            "https://www.google.com/maps/place/DoubleTree+by+Hilton+Hotel+Avanos+-+Cappadocia/@38.714872,34.827627,17z/data=!4m11!3m10!1s0x152a67321f06cbc1:0xda73f7fff29123b6!5m2!4m1!1i2!8m2!3d38.7148678!4d34.8302073!9m1!1b1!16s%2Fg%2F11b6j0h4zd?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D",
          description:
            "Le Méridien Towers Makkah adalah hotel bintang 5 yang terletak strategis di Makkah, Arab Saudi, hanya 3 menit dari Masjidil Haram dengan layanan antar-jemput gratis 24 jam. Hotel ini menawarkan 647 kamar yang luas dan elegan, termasuk suite diplomatik, suite kerajaan, dan suite kerajaan, yang dilengkapi dengan dapur kecil, TV layar datar, minibar, dan akses Wi-Fi gratis. Tamu dapat menikmati berbagai fasilitas, termasuk tiga restoran yang menyajikan masakan internasional, layanan kamar 24 jam, layanan kebersihan harian, dan layanan concierge. Terletak di area Kudai, hotel ini memudahkan akses ke Masjidil Haram dan tempat-tempat suci lainnya di Makkah, menjadikannya pilihan ideal untuk para tamu yang menginginkan kenyamanan dan kemudahan selama kunjungan mereka.",
          facilities: [
            "AC",
            "WiFi",
            "Kolam Renang",
            "TV",
            "Restoran",
            "Layanan Kamar",
            "Kamar Mandi Dalam",
          ],
          check_in_time: undefined,
          check_out_time: undefined,
          address:
            "Yeni Mah. Kizilirmak Cad. No 1, Avanos - Nevsehir, 50500, Türkiye",
          distance_to_masjid: 200,
          food_type: "Prasmanan",
          food_amount: undefined,
          food_menu: undefined,
        },
      ],
      makkah: {
        id: "anjum-makkah",
        city: "Makkah",
        hotel_name: "Anjum",
        star_rating: 5,
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
          "Le Méridien Towers Makkah adalah hotel bintang 5 yang terletak strategis di Makkah, Arab Saudi, hanya 3 menit dari Masjidil Haram dengan layanan antar-jemput gratis 24 jam. Hotel ini menawarkan 647 kamar yang luas dan elegan, termasuk suite diplomatik, suite kerajaan, dan suite kerajaan, yang dilengkapi dengan dapur kecil, TV layar datar, minibar, dan akses Wi-Fi gratis. Tamu dapat menikmati berbagai fasilitas, termasuk tiga restoran yang menyajikan masakan internasional, layanan kamar 24 jam, layanan kebersihan harian, dan layanan concierge. Terletak di area Kudai, hotel ini memudahkan akses ke Masjidil Haram dan tempat-tempat suci lainnya di Makkah, menjadikannya pilihan ideal untuk para tamu yang menginginkan kenyamanan dan kemudahan selama kunjungan mereka.",
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
        address: "Jl. Umm Al Qura Jabal Al Kaaba, Makkah 21955 Arab Saudi",
        distance_to_masjid: 200,
        food_type: "Prasmanan",
        food_amount: 3,
        food_menu: undefined,
      },
      madinah: {
        id: "taiba-madinah",
        city: "Madinah",
        hotel_name: "Taiba Madinah",
        star_rating: 5,
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
        distance_to_masjid: 250,
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
      id: "saptco-reguler",
      provider: "Saptco",
      bus_type: "Economy-Class",
      seat_amount: 45,
    },
    promos: [
      {
        imageUrl: "/assets/promo/promo-diskon-3-juta.jpg",
        link: `${promoLink}`,
      },
    ],
    addons: [
      {
        title: "Kota Al-Ula",
        category: "Wisata Kota",
        price: 2000000,
        places: ["Jabal Ikmah", "Elephant Rock", "Maraya"],
        imageUrl: "/assets/image/voucher/al-ula-4.jpeg",
      },
      {
        title: "Kereta Cepat",
        category: "Transportasi",
        price: 900000,
        places: ["Kereta Cepat"],
        imageUrl: "/assets/image/transportation/fast-train/fast-train-3.webp",
      },
      {
        title: "Makan di Romansiah + Cable Car",
        category: "Wisata Kota Thaif",
        price: 1000000,
        places: ["Restoran Al Romansiah", "Cable Car"],
        imageUrl: "/assets/image/voucher/al-romansiah-restaurant-2.jpeg",
      },
      {
        title: "Restoran Asia + Speed Boat",
        category: "Wisata Kota Jeddah",
        price: 1500000,
        places: ["Restoran Asia Jeddah", "Speed Boat"],
        imageUrl: "/assets/image/voucher/asia-restaurant-jeddah-1.jpg",
      },
    ],
    itineraries: [
      {
        id: "1",
        nth: 1,
        duration: 7,
        city: "Istanbul",
        days: [
          {
            id: "1",
            nth: 1,
            title: "Keberangkatan dari Jakarta menuju Istanbul",
            widgets: [
              {
                id: "1",
                type: "Transport",
                transportWith: "Bus",
                from: "Bandara Internasional Istanbul",
                to: "Kota Bursa",
              },
            ],
            description:
              "Jamaah berkumpul di Bandara Soekarno-Hatta untuk proses check in tiket, imigrasi dan bagasi. Setelah semuanya selesai jamaah akan melakukan penerbangan langsung. Sesampainya di Bandara Internasional Istanbul jamaah melanjutkan perjalanan ke kota Bursa melalui transportasi darat, setibanya di kota Bursa. Jamaah akan melakukan proses check in hotel.",
          },
          {
            id: "2",
            nth: 2,
            title: "Perjalanan dari kota Bursa menuju kota Kuşadası",
            widgets: [],
            description:
              "Jamaah melakukan perjalanan menuju kota Kuşadası melalui kota Bergama sambil mengunjungi beberapa desinasi wisata terkenal di kota ini seperti: Thyatira, Pergamon Acropolis dan Smyrna. Sesampainya di Kuşadası Jamaah akan melakukan proses check in hotel.",
          },
          {
            id: "3",
            nth: 3,
            title: "City Tour Kuşadası",
            widgets: [],
            description:
              "Jamaah akan berkeliling kota Kuşadası dan Selçuk. Mengunjungi beberapa destinasi wisata terkenal seperti kota kuno Ephesus yang terkenal sebagai penghasil kerajinan kulit terbaik di Turki dan juga akan mengunjungi Virgin Mary's House.",
          },
          {
            id: "4",
            nth: 4,
            title: "Perjalanan Menuju Kota Pamukkale",
            widgets: [],
            description:
              "Jamaah melakukan perjalanan menuju kota Pamukkale sambil mengunjungi beberapa desinasi wisata terkenal selama perjalanan seperti: Kota kuno Sardis, Philadelphia, Laodicea dan juga kota kuno Hierapolis yang terkenal dengan 'Kastil Kapas'. Sesampainya di Pamukkale Jamaah akan melakukan proses check in hotel.",
          },
          {
            id: "5",
            nth: 5,
            title: "Perjalanan Menuju Cappadocia",
            widgets: [],
            description:
              "Jamaah melakukan perjalanan menuju Cappadocia melalui kota Konya/Iconium sambil mengunjungi desinasi wisata Sultanhanı Caravanserai di kota Konya/Iconium. Sesampainya di Cappadocia Jamaah akan melakukan proses check in hotel.",
          },
          {
            id: "6",
            nth: 6,
            title: "Full Day City Tour Cappadocia",
            widgets: [],
            description:
              "Jamaah akan berkeliling Cappadocia dalam satu hari full. Mengunjungi beberapa destinasi wisata terkenal seperti Underground City, Göreme Open Air Museum (Museum terbuka terbesar di dunia), Pigeon Valley, Uchisar Castle, Avanos Village hingga mengunjungi produksi karpet dan kerajinan tangan terkenal di Cappadocia.",
          },
          {
            id: "7",
            nth: 7,
            title: "Perjalanan Menuju Istanbul",
            widgets: [],
            description:
              "Jamaah melakukan perjalanan menuju kota Istanbul melalui kota Ankara sambil mengunjungi beberapa desinasi wisata terkenal selama perjalanan seperti: Salt Lake (Tuz lake) dan Anıtkabir (Atatürk's Mausoleum). Sesampainya di Istanbul Jamaah akan melakukan proses check in hotel.",
          },
          {
            id: "8",
            nth: 8,
            title: "City Tour Istanbul dan Keberangkatan ke Jeddah",
            widgets: [],
            description:
              "Jamaah akan berkeliling kota Istanbul. Mengunjungi beberapa destinasi wisata terkenal seperti Grand Bazaar dan Ortaköy Village. Setelah selesai melakukan rangkaian perjalanan di Istanbul jamaah akan melakukan keberangkatan ke Jeddah melalui Bandara Internasional Istanbul.",
          },
        ],
        images: [
          {
            id: "1",
            src: "/assets/image/itinerary/turki/itinerary-cover-turki-4.jpg",
            category: undefined,
          },
          {
            id: "2",
            src: "/assets/image/itinerary/turki/itinerary-cover-turki-11.jpg",
            category: undefined,
          },
          {
            id: "3",
            src: "/assets/image/itinerary/turki/itinerary-cover-turki-14.jpg",
            category: undefined,
          },
          {
            id: "4",
            src: "/assets/image/itinerary/turki/itinerary-cover-turki-20.jpg",
            category: undefined,
          },
          {
            id: "4",
            src: "/assets/image/itinerary/turki/itinerary-cover-turki-2.jpg",
            category: undefined,
          },
        ],
      },
      {
        id: "2",
        nth: 2,
        duration: 3,
        city: "Madinah",
        days: [
          {
            id: "9",
            nth: 9,
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
            id: "10",
            nth: 10,
            title: "City Tour Madinah ",
            widgets: [],
            description:
              "Jamaah melakukan perjalanan mengelilingi kota Madinah dan mengunjungi beberapa destinasi wisata. Seperti: Masjid Quba, Jabal Uhud dan Kebun Kurma.",
          },
          {
            id: "11",
            nth: 11,
            title: "Ziarah di Madinah",
            widgets: [],
            description:
              "Jamaah melakukan ziarah di Raudah, Masjid Nabawi dan sekitaran Masjid Nabawi (Saqifah Bani Sa’idah, Masjid Ghamamah, Makam Rasulullah SAW, dan Makam Baqi).",
          },
        ],
        images: [
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-7.jpg",
            category: undefined,
          },
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-2.jpg",
            category: undefined,
          },
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-8.jpg",
            category: undefined,
          },
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-9.jpg",
            category: undefined,
          },
        ],
      },
      {
        id: "3",
        nth: 3,
        duration: 4,
        city: "Makkah",
        days: [
          {
            id: "12",
            nth: 12,
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
                hotel_name: "Anjum Makkah",
              },
              {
                id: "3",
                type: "Information",
                description:
                  "Tidak ada aktivitas hari ini. Silakan nikmati waktu dengan beristirahat",
              },
            ],
            description:
              "Jamaah melakukan proses check out Hotel di Madinah, lalu melanjutkan perjalanan ke Makkah dengan transportasi darat.Sesampainya di Makkah, Jamaah langsung melakukan proses check in Hotel di Makkah lalu makan malam dan beristirahat untuk ibadah Umrah besok hari.",
          },
          {
            id: "1",
            nth: 13,
            title: "Pelaksanaan Ibadah Umrah di Makkah",
            widgets: [],
            description: "Jamaah melaksanakan ibadah Umrah di Masjidil Haram.",
          },
          {
            id: "2",
            nth: 14,
            title: "City Tour Makkah",
            widgets: [],
            description:
              "Jamaah melakukan perjalanan mengelilingi kota Makkah dan mengunjungi beberapa destinasi wisata.",
          },
          {
            id: "3",
            nth: 15,
            title: "Ziarah di Makkah",
            widgets: [],
            description:
              "Jamaah melakukan ziarah di Jabal Tsur, Jabal Nur, Jabal Rahmah, Padang Arafah dan Muzdalifah.",
          },
          {
            id: "4",
            nth: 16,
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
              "Jamaah melakukan proses check out Hotel di Makkah, lalu melanjutkan perjalanan ke Jeddah dengan transportasi darat. Setelah itu Jamaah Bersiap untuk penerbangan pulang ke Bandara Soekarno-Hatta Jakarta. #BikinTenang",
          },
        ],
        images: [
          {
            id: "1",
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-2.jpg",
            category: undefined,
          },
          {
            id: "2",
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-3.jpg",
            category: undefined,
          },
          {
            id: "3",
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-4.jpg",
            category: undefined,
          },
          {
            id: "4",
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-1.jpg",
            category: undefined,
          },
        ],
      },
    ],
    importantNotes: [
      "Untuk perjalanan ke Turki, kamu harus memiliki paspor dengan masa berlaku minimal 6 bulan dari tanggal kedatangan.",
      "Dilarang membawa barang-barang yang dilarang seperti rokok, cerutu atau pun alkohol.",
      "Selama di Turki, dilarang untuk memfoto instalasi militer, gedung pemerintahan atau individu lokal tanpa izin.",
      "Setiap Jamaah wajib megunjungi: Turkish Delight Shop, Turkish Leather Outlet, Turkish Carpet Factory, Textille Shop, Pottery Shop, Jewelry Shop",
    ],
  },
  {
    id: "umrah-eksklusif-fokus-ibadah-platinum",
    title: "Umrah Eksklusif",
    tagline: "#FokusIbadah",
    thumbnail:
      "/assets/image/packages-umrah/cover-umrah-eksklusif-fokus-ibadah-platinum.jpg",
    type: "Reguler",
    category: "Platinum",
    season: "NON RAMADHAN",
    isFastTrain: true,
    city_departure: [
      {
        city: "Jakarta",
        route: "CGK-JED",
      },
    ],
    duration: "9 Hari",
    package: "Platinum",
    down_payment: 10,
    order_url: `${whatsappLink}Assalamualaikum%2C%20Saya%20tertarik%20untuk%20melakukan%20pemesanan%20paket%20Platinum%20Umrah%20Eksklusif%2C%20Fokus%20Ibadah.%20Saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20paket%20tersebut.%0A%0ATerima%20kasih%20atas%20bantuannya.%20Saya%20tunggu%20informasi%20lebih%20lanjut.`,
    departure_date: [
      {
        date: "2025-03-09T10:00:00+07:00",
        status: "expired",
      },
      {
        date: "2025-03-23T10:00:00+07:00",
        status: "expired",
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
        date: "2025-07-06T10:00:00+07:00",
        status: "active",
      },
      {
        date: "2025-07-20T10:00:00+07:00",
        status: "coming-soon",
      },
    ],
    doublePrice: 49900000,
    triplePrice: 45900000,
    quadPrice: 41900000,
    infantPrice: undefined,
    doubleFinalPrice: 46500000,
    tripleFinalPrice: 42500000,
    quadFinalPrice: 38500000,
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
        departure_datetime: "2025-07-06T10:00:00+07:00",
        departure_arrivaltime: undefined,
        class: "Economy",
        flight_type: "Direct",
        airline: "Saudia Airlines",
        aircraft_type: undefined,
        seat_layout: undefined,
        baggage_allowance: 23,
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
        airport_terminal_arrival: "Terminal 3 Internasional",
        airport_code_arrival: "CGK",
        airport_city_arrival: "Jakarta",
        departure_datetime: "2025-07-13T10:00:00+07:00",
        departure_arrivaltime: undefined,
        class: "Economy",
        flight_type: "Direct",
        airline: "Saudia Airlines",
        aircraft_type: undefined,
        seat_layout: undefined,
        baggage_allowance: 23,
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
        id: "al-marwa-rayhan-by-rotana",
        city: "Makkah",
        hotel_name: "Al-Marwa Rayhan by Rotana",
        star_rating: 5,
        duration: 4,
        images: [
          {
            id: "1",
            src: "/assets/image/hotel/makkah/al-marwa-rayhan/exterior-al-marwa-rayhan-1.jpg",
            category: "Eksterior",
          },
          {
            id: "2",
            src: "/assets/image/hotel/makkah/al-marwa-rayhan/bedroom-al-marwa-rayhan-1.jpg",
            category: "Kamar",
          },
          {
            id: "3",
            src: "/assets/image/hotel/makkah/al-marwa-rayhan/bedroom-al-marwa-rayhan-2.jpg",
            category: "Kamar",
          },
          {
            id: "4",
            src: "/assets/image/hotel/makkah/al-marwa-rayhan/bedroom-al-marwa-rayhan-3.jpg",
            category: "Kamar",
          },
          {
            id: "5",
            src: "/assets/image/hotel/makkah/al-marwa-rayhan/bedroom-al-marwa-rayhan-4.jpg",
            category: "Kamar",
          },
        ],
        google_maps_link_noembed: "https://maps.app.goo.gl/K7Ahz2GY36DDfsVj7",
        google_maps_link:
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3714.2550470206857!2d39.8234328!3d21.4192179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b7bc383e25%3A0x92948cad595dae21!2sAl%20Marwa%20Rayhaan%20by%20Rotana!5e0!3m2!1sid!2sid!4v1737286588344!5m2!1sid!2sid",
        google_review_link:
          "https://www.google.com/travel/search?q=Al-Marwa%20Rayhaan%20-%20by%20Rotana&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499704%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72749231%2C72760080%2C72808078&hl=id-ID&gl=id&cs=1&ssta=1&qs=CAEyFENnc0lvZHoyeXRXVm84cVNBUkFCOAJCCQkhrl1ZrYyUkkIJCSGuXVmtjJSS&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiYhLfn5--JAxUAAAAAHQAAAAAQEA&ts=CAESCAoCCAMKAggDGkcKKRInMiUweDE1YzIwNGI3YmMzODNlMjU6MHg5Mjk0OGNhZDU5NWRhZTIxEhoSFAoHCOgPEAsYGhIHCOgPEAsYGxgBMgIQAA%3D%3D",
        description:
          "Al-Marwa Rayhan by Rotana adalah hotel mewah yang berlokasi strategis di dalam kompleks Abraj Al-Bait, menawarkan akses langsung ke Masjidil Haram. Hotel ini menyediakan kenyamanan modern dengan sentuhan keanggunan Timur Tengah, menghadirkan pengalaman menginap yang memadukan kehangatan budaya lokal dengan fasilitas kelas dunia. Setiap kamar dan suite dirancang untuk kenyamanan optimal, dilengkapi dengan pemandangan kota Makkah atau Masjidil Haram yang memukau. Fasilitasnya mencakup restoran dengan berbagai pilihan hidangan internasional dan lokal, layanan kamar 24 jam, serta akses mudah ke pusat perbelanjaan. Al-Marwa Rayhan by Rotana adalah pilihan ideal bagi para tamu yang mencari penginapan elegan untuk menjalani perjalanan spiritual mereka di kota suci.",
        facilities: [
          "AC",
          "WiFi",
          "Restoran",
          "TV",
          "Layanan Kamar",
          "Kamar Mandi Dalam",
          "Resepsionis 24/7",
        ],
        check_in_time: undefined,
        check_out_time: undefined,
        address: "Kompleks Aiyad Street Clock Tower, Makkah 24231 Arab Saudi",
        distance_to_masjid: 200,
        food_type: "Prasmanan",
        food_amount: 3,
        food_menu: undefined,
      },
      madinah: {
        id: "al-aqeeq-madinah",
        city: "Madinah",
        hotel_name: "Al-Aqeeq Madinah",
        star_rating: 5,
        duration: 3,
        images: [
          {
            id: "1",
            src: "/assets/image/hotel/madinah/al-aqeeq/exterior-al-aqeeq-1.jpg",
            category: "Eksterior",
          },
          {
            id: "2",
            src: "/assets/image/hotel/madinah/al-aqeeq/bedroom-al-aqeeq-1.jpg",
            category: "Kamar",
          },
          {
            id: "3",
            src: "/assets/image/hotel/madinah/al-aqeeq/bedroom-al-aqeeq-2.jpg",
            category: "Kamar",
          },
          {
            id: "4",
            src: "/assets/image/hotel/madinah/al-aqeeq/bedroom-al-aqeeq-3.jpg",
            category: "Kamar",
          },
          {
            id: "5",
            src: "/assets/image/hotel/madinah/al-aqeeq/bedroom-al-aqeeq-4.jpg",
            category: "Kamar",
          },
          {
            id: "6",
            src: "/assets/image/hotel/madinah/al-aqeeq/bedroom-al-aqeeq-5.jpg",
            category: "Kamar",
          },
          {
            id: "6",
            src: "/assets/image/hotel/madinah/al-aqeeq/bedroom-al-aqeeq-6.jpg",
            category: "Kamar",
          },
          {
            id: "7",
            src: "/assets/image/hotel/madinah/al-aqeeq/bathroom-al-aqeeq-1.jpg",
            category: "Kamar Mandi",
          },
          {
            id: "8",
            src: "/assets/image/hotel/madinah/al-aqeeq/restaurant-al-aqeeq-1.jpg",
            category: "Restoran",
          },
        ],
        google_maps_link_noembed: "https://maps.app.goo.gl/Tmh1rKZPB5yYqtzZ9",
        google_maps_link:
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3631.3879471723867!2d39.6068465!3d24.4720116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbfd70ecc73bd%3A0x4c65dce789386331!2sAl%20Aqeeq%20Madinah%20Hotel!5e0!3m2!1sid!2sid!4v1737286779418!5m2!1sid!2sid",
        google_review_link:
          "https://www.google.com/travel/search?q=Madinah%20Al%20Aqeeq&g2lb=4814050%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499704%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72749231%2C72760080%2C72808078&hl=id-ID&gl=id&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MTViZGJmZDcwZWNjNzNiZDoweDRjNjVkY2U3ODkzODYzMzESGhIUCgcI6A8QCxgbEgcI6A8QCxgcGAEyAhAA&qs=CAEyE0Nnb0lzY2JoeWZpYzk3Sk1FQUU4AkIJCTFjOInn3GVMQgkJMWM4iefcZUw&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiwvL3Z5O-JAxUAAAAAHQAAAAAQEg",
        description:
          "Hotel Al-Aqeeq Madinah menawarkan akomodasi nyaman dan strategis yang hanya berjarak beberapa langkah dari Masjid Nabawi. Hotel ini dirancang dengan kehangatan dan kemewahan yang mencerminkan keramahan khas Madinah, menjadikannya tempat istirahat yang sempurna bagi para tamu yang melakukan perjalanan spiritual. Setiap kamar dilengkapi dengan fasilitas modern, termasuk tempat tidur berkualitas tinggi, TV layar datar, dan akses Wi-Fi gratis, memberikan kenyamanan maksimal selama menginap. Restoran di hotel ini menyajikan berbagai hidangan lokal dan internasional untuk memenuhi selera tamu. Dengan lokasi yang sangat dekat dengan tempat-tempat suci dan pusat perbelanjaan, Hotel Al-Aqeeq Madinah adalah pilihan ideal bagi para peziarah yang mencari pengalaman menginap tak terlupakan di kota suci Madinah.",
        facilities: [
          "AC",
          "WiFi",
          "TV",
          "Restoran",
          "Layanan Kamar",
          "Kamar Mandi Dalam",
          "Resepsionis 24/7",
        ],
        check_in_time: undefined,
        check_out_time: undefined,
        address:
          "Jl. Musab Bin Omair Wilayah Tengah Utara, Madinah 41442 Arab Saudi",
        distance_to_masjid: 150,
        food_type: "Prasmanan",
        food_amount: 3,
        food_menu: undefined,
      },
    },
    bus_details: {
      images: [
        {
          id: "1",
          src: "/assets/image/transportation/bus/saptco-vvip-1.jpg",
          category: undefined,
        },
        {
          id: "2",
          src: "/assets/image/transportation/bus/saptco-vvip-2.jpg",
          category: undefined,
        },
        {
          id: "3",
          src: "/assets/image/transportation/bus/saptco-vvip-3.jpg",
          category: undefined,
        },
      ],
      id: "saptco-reguler",
      provider: "Saptco",
      bus_type: "VVIP-Class",
      seat_amount: 20,
    },
    promos: [
      {
        imageUrl: "/assets/promo/promo-diskon-3-juta.jpg",
        link: `${promoLink}`,
      },
    ],
    addons: [
      {
        title: "Kota Al-Ula",
        category: "Wisata Kota",
        price: 2000000,
        places: ["Jabal Ikmah", "Elephant Rock", "Maraya"],
        imageUrl: "/assets/image/voucher/al-ula-4.jpeg",
      },
      {
        title: "Makan di Romansiah + Cable Car",
        category: "Wisata Kota Thaif",
        price: 1000000,
        places: ["Restoran Al Romansiah", "Cable Car"],
        imageUrl: "/assets/image/voucher/al-romansiah-restaurant-2.jpeg",
      },
      {
        title: "Restoran Asia + Speed Boat",
        category: "Wisata Kota Jeddah",
        price: 1500000,
        places: ["Restoran Asia Jeddah", "Speed Boat"],
        imageUrl: "/assets/image/voucher/asia-restaurant-jeddah-1.jpg",
      },
    ],
    itineraries: [
      {
        id: "1",
        nth: 1,
        duration: 3,
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
                to: "Hotel Al-Aqeeq Madinah",
              },
              {
                id: "2",
                type: "Hotel",
                hotel_name: "Al-Aqeeq Madinah",
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
        ],
        images: [
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-7.jpg",
            category: undefined,
          },
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-2.jpg",
            category: undefined,
          },
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-8.jpg",
            category: undefined,
          },
          {
            id: "1",
            src: "/assets/image/itinerary/madinah/itinerary-cover-madinah-9.jpg",
            category: undefined,
          },
        ],
      },
      {
        id: "2",
        nth: 2,
        duration: 4,
        city: "Makkah",
        days: [
          {
            id: "5",
            nth: 5,
            title: "Perjalanan Madinah - Makkah",
            widgets: [
              {
                id: "1",
                type: "Transport",
                transportWith: "Bus",
                from: "Hotel Al-Aqeeq Madinah",
                to: "Hotel Al-Marwa Rayhan by Rotana",
              },
              {
                id: "2",
                type: "Hotel",
                hotel_name: "Al-Marwa Rayhan by Rotana",
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
                from: "Hotel Al-Marwa Rayhan by Rotana",
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
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-2.jpg",
            category: undefined,
          },
          {
            id: "2",
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-3.jpg",
            category: undefined,
          },
          {
            id: "3",
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-4.jpg",
            category: undefined,
          },
          {
            id: "4",
            src: "/assets/image/itinerary/makkah/itinerary-cover-makkah-1.jpg",
            category: undefined,
          },
        ],
      },
    ],
    importantNotes: [],
  },
];
