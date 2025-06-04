export const useMockData = () => {
  const categoryMenu = [
    {
      name: "Thiết bị vệ sinh",
      slug: "thiet-bi-ve-sinh",
      child: [
        { name: "Bồn cầu", slug: "bon-cau" },
        { name: "Chậu rửa", slug: "chau-rua" },
        { name: "Vòi sen", slug: "voi-sen" },
        { name: "Bồn cầu", slug: "bon-cau" },
        { name: "Chậu rửa", slug: "chau-rua" },
        { name: "Vòi sen", slug: "voi-sen" },
      ],
    },
    {
      name: "Thiết bị bếp",
      slug: "thiet-bi-bep",
      child: [
        { name: "Bếp gas", slug: "bep-gas" },
        { name: "Bếp điện", slug: "bep-dien" },
        { name: "Máy hút mùi", slug: "may-hut-mui" },
      ],
    },
    {
      name: "Thiết bị vệ nước",
      slug: "thiet-bi-ve-nuoc",
      child: [
        { name: "Máy lọc nước", slug: "may-loc-nuoc" },
        { name: "Bình nóng lạnh", slug: "binh-nong-lanh" },
      ],
    },
    {
      name: "Thiết bị khóa cửa",
      slug: "thiet-bi-khoa-cua",
      child: [
        { name: "Khóa vân tay", slug: "khoa-van-tay" },
        { name: "Khóa cơ", slug: "khoa-co" },
      ],
    },
    {
      name: "Báo giá",
      slug: "bao-gia",
      child: [
        { name: "Báo giá thiết bị vệ sinh", slug: "bao-gia-thiet-bi-ve-sinh" },
        { name: "Báo giá thiết bị bếp", slug: "bao-gia-thiet-bi-bep" },
      ],
    },
    {
      name: "Khuyến mãi",
      slug: "khuyen-mai",
      child: [
        { name: "Giảm giá mùa hè", slug: "giam-gia-mua-he" },
        { name: "Tặng quà", slug: "tang-qua" },
      ],
    },
    {
      name: "Catalogue",
      slug: "catalogue",
      child: [
        { name: "Catalogue 2024", slug: "catalogue-2024" },
        { name: "Catalogue 2023", slug: "catalogue-2023" },
      ],
    },
    {
      name: "Hỏi đáp",
      slug: "hoi-dap",
      child: [
        { name: "Hỏi đáp sản phẩm", slug: "hoi-dap-san-pham" },
        { name: "Hỏi đáp kỹ thuật", slug: "hoi-dap-ky-thuat" },
      ],
    },
  ];

  const Categories = [
    {
      name: "bài viết mới",
      child: [
        {
          name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua 11",
          slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua",
        },
        {
          name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua 22",
          slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua-2",
        },
        {
          name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua 33",
          slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua-3",
        },
        {
          name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua4 ",
          slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua-4",
        },
        {
          name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua55",
          slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua-5",
        },
      ],
    },
    {
      name: "Chuyên mục",
      child: [
        {
          name: "Khuyến Mãi",
          slug: "khuyen-mai",
          child: [
            {
              name: "Khuyến mãi thiết bị vệ sinh",
              slug: "khuyen-mai-thiet-bi-ve-sinh",
            },
            {
              name: "Khuyến mãi thiết bị bếp",
              slug: "khuyen-mai-thiet-bi-bep",
            },
            {
              name: "Khuyến mãi thiết bị nước",
              slug: "khuyen-mai-thiet-bi-nuoc",
            },
            {
              name: "Khuyến mãi thiết bị khóa cửa",
              slug: "khuyen-mai-thiet-bi-khoa-cua",
            },
          ],
        },
        {
          name: "Báo Giá",
          slug: "bao-gia",
          child: [
            {
              name: "Báo giá thiết bị vệ sinh",
              slug: "bao-gia-thiet-bi-ve-sinh",
            },
            {
              name: "Báo giá thiết bị bếp",
              slug: "bao-gia-thiet-bi-bep",
            },
          ],
        },
        {
          name: "Catalogue",
          slug: "catalogue",
        },
        {
          name: "Hỏi Đáp",
          slug: "hoi-dap",
        },
        {
          name: "Thiết Bị Vệ Sinh",
          slug: "thiet-bi-ve-sinh",
        },
        {
          name: "Thiết Bị Bếp",
          slug: "thiet-bi-bep",
        },
        {
          name: "Thiết Bị Nước",
          slug: "thiet-bi-nuoc",
        },
        {
          name: "Thiết Bị Khóa Cửa",
          slug: "thiet-bi-khoa-cua",
        },
      ],
    },
  ];

  return {
    categoryMenu,
    Categories,
  };
};
