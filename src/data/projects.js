// src/data/projects.js

// CATEGORY → PROGRAMME → EPISODES
// categories[categoryKey].items       = programmes
// programme.items                     = episodes

export const categories = {
  peacecake: {
    slug: 'peacecake',
    name: 'Peace Cake',
    thumbnail: '/resrcs/npc.png',

    // programmes for this category
    items: [
      {
        id: 'martabetelsharaf',
        title: 'Martabet El Sharaf',
        image: '/resrcs/programs/mrtbt.png',
        bgimage: '/resrcs/programs/nobg/martabet.png',
        // episodes
        items: [
          {
            id: 'pc_ms_kassat',
            title: 'قصات شعر ممكن تتقدم بيها',
            image: '/resrcs/thumbs/ms_kassat.jpg',
            videoUrl: 'https://youtu.be/KYMctRm93zo?si=nM6QeuhsYEmn2Exm',
          },
          {
            id: 'pc_ms_hywnt',
            title: 'لو الحيوانات بتتكلم هتحتفل ازاي؟',
            image: '/resrcs/thumbs/ms_hywnt.jpg',
            videoUrl: 'https://youtu.be/c90hFbvIBpk?si=76npTy6IvGTwrRQM',
          },
        ],
      },

      {
        id: 'ellyfakerfaker',
        title: 'Elly Faker Faker',
        image: '/resrcs/programs/elyfaker.png',
        bgimage: '/resrcs/programs/nobg/elyfaker.png',
        items: [
          {
            id: 'pc_elf_mwhb',
            title: 'مواهب تستاهل الدفن بجد',
            image: '/resrcs/thumbs/elf_mwhb.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=Xt5mOWzTUg8',
          },
        ],
      },

      {
        id: 'beyti',
        title: 'Beyti',
        image: '/resrcs/programs/byti.png',
        bgimage: '/resrcs/programs/nobg/byti.png',
        items: [
          {
            id: 'pc_beyti_moula',
            title: 'مولى وطنط عملوا جريمة',
            image: '/resrcs/thumbs/beyti.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=Ncf4HbibLyE',
          },
        ],
      },

      {
        id: 'elsohabfiagaza',
        title: 'El Sohab Fi Agaza',
        image: '/resrcs/programs/shb.png',
        bgimage: '/resrcs/programs/nobg/sohab.png',
        items: [
          {
            id: 'pc_elshb',
            title: 'باتمان الحقيقي وصل',
            image: '/resrcs/thumbs/elshb_casino.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=4Hw-4XTYTm0',
          },
        ],
      },

      {
        id: 'mafioso',
        title: 'Mafioso',
        image: '/resrcs/programs/mfioso.png',
        bgimage: '/resrcs/programs/nobg/mfioso.png',
        items: [
          {
            id: 'pc_mf_khtmha',
            title: 'ختامها مسك',
            image: '/resrcs/thumbs/pc_mf-khtmha.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=Ybdg_S6pQUE',
          },
          {
            id: 'pc_mf_khasa',
            title: 'حلقة خاصه جدا',
            image: '/resrcs/thumbs/pc_mf_khasa.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=oZ5SALW6dXU',
          },
        ],
      },

      {
        id: 'manshar',
        title: 'El Manshar',
        image: '/resrcs/programs/mnshr.png',
        bgimage: '/resrcs/programs/nobg/mnshr.png',
        items: [
          {
            id: 'pc_mnshr_sa3a',
            title: 'احترس!! ساعة من المواقف التوكسيك!!',
            image: '/resrcs/thumbs/pc_manshrsa3a.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=WYKFBhuVNNk',
          },
        ],
      },

      {
        id: 'talabat',
        title: 'Talabat',
        image: '/resrcs/programs/tlbt.png',
        bgimage: '/resrcs/programs/nobg/tlbt.png',
        items: [
          {
            id: 'pc_talabat_1',
            title: 'وبكده يكون نهاية سعيده للموسم التالت🤪🫡',
            image: '/resrcs/thumbs/talabat_lastorder.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=3sm2dqyvl9U',
          },
          {
            id: 'pc_talabat_2',
            title:
              'الحلقة المجمعة الأخيرة مع ضيوفنا اللي عارفين بعض جداً🫣🤪🫡',
            image: '/resrcs/thumbs/talabat2.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=Qvq2FsG8R0Q',
          },
        ],
      },

      {
        id: 'romanseya',
        title: 'Romanseya Manseya',
        image: '/resrcs/programs/romance.png',
        bgimage: '/resrcs/programs/nobg/rmsya.png',
        items: [
          
          {
            id: 'pc_rmnsya_2',
            title:'اتفرجوا قبل ما مديري يمسح الفيديو',
            image: '/resrcs/thumbs/rmnsya.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=XwIkGJL51LY',
          },
        ],
      },

      {
        id: 'tiktoks',
        title: 'Tiktoks',
        image: '/resrcs/programs/tik.png',
        bgimage: '/resrcs/programs/nobg/tikto.png',
        items: [
          {
            id: 'pc_tiktoks_1',
            title: 'قبل الفطار من مطبخ طنط مروة',
            image: '/resrcs/thumbs/kabl.png',
            videoUrl: 'https://vt.tiktok.com/ZSDBUBn64/',
          },
          {
            id: 'pc_tiktoks_2',
            title: 'مسابقة بيس كيك وسينك',
            image: '/resrcs/thumbs/sync.png',
            videoUrl: 'https://vt.tiktok.com/ZSDBDc7et/',
          },
        ],
      },
    ],
  },

  localBrands: {
    slug: 'local-brands',
    name: 'Local Brands & Freelance',
    thumbnail: '/resrcs/fl.png',

    // treat each brand as a "programme" with its own episodes array
    items: [
      {
        id: 'hany-el-behairy',
        title: 'Hany El Behairy',
        image: '/resrcs/programs/hany.png',
        bgimage: '/resrcs/programs/hany.png',
        items: [
          {
            id: 'local_hany_1',
            title: 'Hany El Behairy',
            image: '/resrcs/programs/hany.png',
            videoUrl: 'https://drive.google.com/drive/folders/1Zt17bRlQDMncLydBxnzB2fpKoG6BByGz',
          },
        ],
      },
      {
        id: 'cushy-threads',
        title: 'Cushy Threads',
        image: '/resrcs/programs/cushy.png',
        bgimage: '/resrcs/programs/cushy.png',
        items: [
          {
            id: 'local_cushy_1',
            title: 'Cushy Threads',
            image: '/resrcs/programs/cushy.png',
            videoUrl: 'https://drive.google.com/drive/folders/1o8cR6JHGcrf_cfoiHo1irYIT721NeJHt',
          },
        ],
      },
      {
        id: 'yakoot',
        title: 'Yakoot',
        image: '/resrcs/programs/yakoot.png',
        bgimage: '/resrcs/programs/yakoot.png',
        items: [
          {
            id: 'local_yakoot_1',
            title: 'Yakoot',
            image: '/resrcs/programs/yakoot.png',
            videoUrl: 'https://drive.google.com/drive/folders/1--QCZS4VZUFa3p4DUhgWJ66ZUs75Th9-',
          },
        ],
      },
    ],
  },
   Academic: {
    slug: 'academic',
    name: 'Academic Projects',
    thumbnail: '/resrcs/acad.png',

    // treat each brand as a "programme" with its own episodes array
    items: [
      {
        id: 'grad',
        title: 'Graduation Project',
        image: '/resrcs/programs/gradposter.jpg',
        bgimage: '/resrcs/programs/tbleen.png',
        items: [
          {
            id: 'gradtrailer',
            title: 'Graduation Project',
            image: '/resrcs/programs/gradposter.jpg',
            videoUrl: 'https://drive.google.com/drive/folders/1Oj1Ti0U1Bsunt9q2KUmTcckWu5ZdhvjT',
          }
        ],
      },
      
    ],
  },
  
};

/* ---------- Helpers ---------- */

// All categories as an array (useful for the main grid)
export function getAllCategories() {
  return Object.values(categories);
}

// Get one category by slug, e.g. 'peacecake' or 'local-brands'
export function getCategory(slug) {
  return getAllCategories().find((cat) => cat.slug === slug) ?? null;
}

// "Programme" here is one level under category: category.items[*]
export function getProgramme(categorySlug, programmeId) {
  const category = getCategory(categorySlug);
  if (!category) return null;
  return category.items.find((prog) => prog.id === programmeId) ?? null;
}

// Episodes for a given category + programme
export function getEpisodes(categorySlug, programmeId) {
  const programme = getProgramme(categorySlug, programmeId);
  return programme?.items ?? [];
}
