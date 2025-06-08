import { ref } from "vue";

export const useMockData = () => {
  const categoryMenu = [
    {
      name: "Bài viết mới nhất",
      items: [
        {
          img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/05/chau-rua-chen-hafele.jpg",
          title:
            "1Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua",
          currentTime: "13-03-2025",
          slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua",
        },
        {
          img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/05/chau-rua-chen-hafele.jpg",
          title:
            "2Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua",
          currentTime: "13-03-2025",
          slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua",
        },
        {
          img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/05/chau-rua-chen-hafele.jpg",
          title:
            "3Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua",
          currentTime: "13-03-2025",
          slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua",
        },
        {
          img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/04/nguyen-nhan-va-cach-khac-phuc-bon-cau-khong-troi-768x576.jpg",
          title:
            "44Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua",
          currentTime: "13-03-2025",
          slug: "44chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua",
        },
      ],
    },
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
      items: [
        {
          title:
            "So sánh bồn cầu 1 khối Toto MS857/C875D với MS885/C885D và MS855/C855D: Tại sao giá rẻ hơn và có nên mua?",
          currentTime: "13-03-2025",
          slug: "so-sanh-bon-cau-1-khoi-toto-ms857-c875d-voi-ms885-c885d-va-ms855-c855d-tai-sao-gia-re-hon-va-co-nen-mua",
          img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/03/so-sanh-bon-cau-ms857-voims885-ms855-768x576.jpg",
        },
        {
          title:
            "So sánh bồn cầu 1 khối Toto MS857/C875D với MS885/C885D và MS855/C855D: Tại sao giá rẻ hơn và có nên mua?",
          currentTime: "13-03-2025",
          slug: "so-sanh-bon-cau-1-khoi-toto-ms857-c875d-voi-ms885-c885d-va-ms855-c855d-tai-sao-gia-re-hon-va-co-nen-mua",
          img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/03/so-sanh-bon-cau-ms857-voims885-ms855-768x576.jpg",
        },
        {
          title:
            "So sánh bồn cầu 1 khối Toto MS857/C875D với MS885/C885D và MS855/C855D: Tại sao giá rẻ hơn và có nên mua?",
          currentTime: "13-03-2025",
          slug: "so-sanh-bon-cau-1-khoi-toto-ms857-c875d-voi-ms885-c885d-va-ms855-c855d-tai-sao-gia-re-hon-va-co-nen-mua",
          img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/03/so-sanh-bon-cau-ms857-voims885-ms855-768x576.jpg",
        },
        {
          title:
            "So sánh bồn cầu 1 khối Toto MS857/C875D với MS885/C885D và MS855/C855D: Tại sao giá rẻ hơn và có nên mua?",
          currentTime: "13-03-2025",
          slug: "so-sanh-bon-cau-1-khoi-toto-ms857-c875d-voi-ms885-c885d-va-ms855-c855d-tai-sao-gia-re-hon-va-co-nen-mua",
          img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/03/so-sanh-bon-cau-ms857-voims885-ms855-768x576.jpg",
        },
        {
          title:
            "So sánh bồn cầu 1 khối Toto MS857/C875D với MS885/C885D và MS855/C855D: Tại sao giá rẻ hơn và có nên mua?",
          currentTime: "13-03-2025",
          slug: "so-sanh-bon-cau-1-khoi-toto-ms857-c875d-voi-ms885-c885d-va-ms855-c855d-tai-sao-gia-re-hon-va-co-nen-mua",
          img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/03/so-sanh-bon-cau-ms857-voims885-ms855-768x576.jpg",
        },
      ],
    },
    {
      name: "Thiết bị bếp",
      items: [
        {
          img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/03/so-sanh-bon-cau-ms857-voims885-ms855-768x576.jpg",
          title:
            "So sánh bồn cầu 1 khối Toto MS857/C875D với MS885/C885D và MS855/C855D: Tại sao giá rẻ hơn và có nên mua?",
          currentTime: "13-03-2025",
          slug: "so-sanh-bon-cau-1-khoi-toto-ms857-c875d-voi-ms885-c885d-va-ms855-c855d-tai-sao-gia-re-hon-va-co-nen-mua",
        },
        {
          img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/03/so-sanh-bon-cau-ms857-voims885-ms855-768x576.jpg",
          title:
            "So sánh bồn cầu 1 khối Toto MS857/C875D với MS885/C885D và MS855/C855D: Tại sao giá rẻ hơn và có nên mua?",
          currentTime: "13-03-2025",
          slug: "so-sanh-bon-cau-1-khoi-toto-ms857-c875d-voi-ms885-c885d-va-ms855-c855d-tai-sao-gia-re-hon-va-co-nen-mua",
        },
      ],
      slug: "thiet-bi-bep",
      child: [
        { name: "Bếp gas", slug: "bep-gas" },
        { name: "Bếp điện", slug: "bep-dien" },
        { name: "Máy hút mùi", slug: "may-hut-mui" },
      ],
    },
    {
      name: "Thiết bị nước",
      img: "https://www.tdm.vn/thong-tin/wp-content/uploads/2025/03/so-sanh-bon-cau-ms857-voims885-ms855-768x576.jpg",
      items: "",
      slug: "thiet-bi-nuoc",
      child: [
        { name: "Máy lọc nước", slug: "may-loc-nuoc" },
        { name: "Bình nóng lạnh", slug: "binh-nong-lanh" },
      ],
    },
    {
      name: "Thiết bị khóa cửa",
      items: "",
      slug: "thiet-bi-khoa-cua",
      child: [
        { name: "Khóa vân tay", slug: "khoa-van-tay" },
        { name: "Khóa cơ", slug: "khoa-co" },
      ],
    },
    {
      name: "Báo giá",
      items: "",
      slug: "bao-gia",
      child: [
        { name: "Báo giá thiết bị vệ sinh", slug: "bao-gia-thiet-bi-ve-sinh" },
        { name: "Báo giá thiết bị bếp", slug: "bao-gia-thiet-bi-bep" },
      ],
    },
    {
      name: "Khuyến mãi",
      items: "",
      slug: "khuyen-mai",
      child: [
        { name: "Giảm giá mùa hè", slug: "giam-gia-mua-he" },
        { name: "Tặng quà", slug: "tang-qua" },
      ],
    },
    {
      name: "Catalogue",
      items: "",
      slug: "catalogue",
      child: [
        { name: "Catalogue 2024", slug: "catalogue-2024" },
        { name: "Catalogue 2023", slug: "catalogue-2023" },
      ],
    },
    {
      name: "Hỏi đáp",
      items: "",
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
          name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua 11 Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua 11Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua 11",
          slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua",
        },
        {
          name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua 2 Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua 112",
          slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua-2",
        },
        {
          name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua 3 Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua 113",
          slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua-3",
        },
        {
          name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua4 Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua 11 ",
          slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua-4",
        },
        {
          name: "Chậu Rửa Chén Hafele: Chất Liệu Đa Dạng (Đá, Inox), Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua55 Thiết Kế Thông Minh và Kinh Nghiệm Chọn Mua 11",
          slug: "chau-rua-chen-hafele-chat-lieu-da-dang-thiet-ke-thong-minh-kinh-nghiem-chon-mua-5",
        },
      ],
    },
    {
      name: "Chuyên mục",
      child: [
        {
          name: "Thiết Bị Vệ Sinh",
          slug: "thiet-bi-ve-sinh",
          child: [
            { name: "Bồn cầu", slug: "bon-cau" },
            { name: "Chậu rửa", slug: "chau-rua" },
            { name: "Vòi sen", slug: "voi-sen" },
          ],
        },
        {
          name: "Thiết Bị Bếp",
          slug: "thiet-bi-bep",
          child: [
            { name: "Bếp gas", slug: "bep-gas" },
            { name: "Bếp điện", slug: "bep-dien" },
            { name: "Máy hút mùi", slug: "may-hut-mui" },
          ],
        },
        {
          name: "Thiết Bị Nước",
          slug: "thiet-bi-nuoc",
          child: [
            { name: "Máy lọc nước", slug: "may-loc-nuoc" },
            { name: "Bình nóng lạnh", slug: "binh-nong-lanh" },
          ],
        },
        {
          name: "Thiết Bị Khóa Cửa",
          slug: "thiet-bi-khoa-cua",
          child: [
            { name: "Khóa vân tay", slug: "khoa-van-tay" },
            { name: "Khóa cơ", slug: "khoa-co" },
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
          name: "Catalogue",
          slug: "catalogue",
          child: [
            {
              name: "Catalogue 2024",
              slug: "catalogue-2024",
            },
            {
              name: "Catalogue 2023",
              slug: "catalogue-2023",
            },
          ],
        },
        {
          name: "Hỏi Đáp",
          slug: "hoi-dap",
          child: [
            {
              name: "Hỏi đáp sản phẩm",
              slug: "hoi-dap-san-pham",
            },
            {
              name: "Hỏi đáp kỹ thuật",
              slug: "hoi-dap-ky-thuat",
            },
          ],
        },
      ],
    },
  ];

  const wighets = [
    {
      image:
        "https://www.tdm.vn/catalog/view/theme/default/image/icon-zalo-3.png",
      name: "Chat Zalo",
      desc: "(7h30 - 18h00)",
    },
    {
      image:
        "https://st2.depositphotos.com/5266903/8762/v/450/depositphotos_87623494-stock-illustration-phone-call-icon.jpg",
      name: "0357312832",
      desc: "(7h30 - 18h00)",
    },
    {
      image:
        "https://www.tdm.vn/catalog/view/theme/default/image/icon-messenger.png",
      name: "Chat Facebook",
      desc: "(7h30 - 18h00)",
    },
  ];

  return {
    categoryMenu,
    Categories,
    wighets,
  };
};

export const useMockUserForm = () => {
  const userForm = [
    {
      group: "Thông tin cá nhân",
      fields: [
        {
          label: "Tên",
          model: "firstName",
          placeholder: "Nhập tên",
          type: "text",
          required: true,
        },
        {
          label: "Họ và tên lót",
          model: "lastName",
          placeholder: "Nhập họ và tên lót",
          type: "text",
          required: true,
        },
        {
          label: "Địa chỉ E-Mail",
          model: "email",
          placeholder: "Nhập email",
          type: "email",
          required: true,
        },
        {
          label: "Điện Thoại",
          model: "phone",
          placeholder: "Nhập số điện thoại",
          type: "tel",
          required: true,
        },
      ],
    },
    {
      group: "Mật khẩu",
      fields: [
        {
          label: "Mật Khẩu",
          model: "password",
          placeholder: "Nhập mật khẩu",
          type: "password",
          required: true,
        },
        {
          label: "Nhập lại Mật Khẩu",
          model: "confirmPassword",
          placeholder: "Nhập lại mật khẩu",
          type: "password",
          required: true,
        },
      ],
    },
  ];
  return userForm;
};
