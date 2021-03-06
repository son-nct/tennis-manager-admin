export default {
    namespaced: true,
    state: {
      membersList: [
        {
          id: "1",
          img: "https://cdn.pixabay.com/photo/2018/04/05/14/09/sunflowers-3292932__340.jpg",
          username: "thaison1",
          fullName: "Nguyễn Công Thái Sơn",
          email: "sonnguyen@gmail.com",
          phoneNumber: "0258741147",
          createDate : "10/5/2022",
          bookingCount : 3,
          status: "Active",
        },
        {
          id: "2",
          img: "https://cdn.pixabay.com/photo/2017/10/10/16/55/halloween-2837936__340.png",
          username: "hongphuc1",
          fullName: "Huỳnh Lê Hồng Phúc",
          email: "hongphuc@gmail.com",
          phoneNumber: "0258963321",
          createDate : "12/5/2022",
          bookingCount : 1,
          status: "Active",
        },
        {
          id: "3",
          img: "https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637__340.jpg",
          username: "ducthinh1",
          fullName: "Lê Trần Đức Thịnh",
          email: "ducthinh@gmail.com",
          phoneNumber: "0200100302",
          createDate : "5/5/2021",
          bookingCount : 5,
          status: "Active",
        },
        {
          id: "4",
          img: "https://cdn.pixabay.com/photo/2016/04/18/22/05/seashells-1337565__340.jpg",
          username: "lamtruong1",
          fullName: "Nguyên Lam Trường",
          email: "lamtruong@gmail.com",
          phoneNumber: "0369852147",
          createDate : "1/5/2021",
          bookingCount : 0,
          status: "InActive",
        },
        {
          id: "5",
          img: "https://cdn.pixabay.com/photo/2018/05/10/20/00/gerbera-3388622__340.jpg",
          username: "nhathuy1",
          fullName: "Võ Nhật Huy",
          email: "nhathuy@gmail.com",
          phoneNumber: "0147123693",
          createDate : "10/5/2021",
          bookingCount : 0,
          status: "InActive",
        },
        {
          id: "6",
          img: "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__340.jpg",
          username: "locthanh1",
          fullName: "Nguyễn Xuân Lộc Thanh",
          email: "locthanh@gmail.com",
          phoneNumber: "0301252331",
          createDate : "10/6/2022",
          bookingCount : 0,
          status: "Active",
        },
        {
          id: "7",
          img: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
          username: "hoangtu1",
          fullName: "Đoàn Hoàng Tú",
          email: "hoangtu@gmail.com",
          phoneNumber: "0258974852",
          createDate : "10/6/2022",
          bookingCount : 4,
          status: "Active",
        },
        {
          id: "8",
          img: "https://cdn.pixabay.com/photo/2018/01/04/19/43/love-3061483__340.jpg",
          username: "vanlam1",
          fullName: "Nguyễn Văn Lâm",
          email: "vanlam@gmail.com",
          phoneNumber: "0111444578",
          createDate : "10/6/2022",
          bookingCount : 1,
          status: "Active",
        },
        {
          id: "9",
          img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          username: "ramsey1",
          fullName: "Golden Remsey",
          email: "ramsey@gmail.com",
          phoneNumber: "0503632147",
          createDate : "10/2/2022",
          bookingCount : 12,
          status: "Active",
        },
        {
          id: "10",
          img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          username: "hoanghai1",
          fullName: "Phạm Hoàng Hải",
          email: "hoanghai@gmail.com",
          phoneNumber: "0325147897",
          createDate : "10/2/2021",
          bookingCount : 6,
          status: "Active",
        },
        {
          id: "11",
          img: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          username: "lukaku1",
          fullName: "Roberto Lukaku",
          email: "robertolukaku@gmail.com",
          phoneNumber: "03698521457",
          createDate : "10/2/2021",
          bookingCount : 0,
          status: "InActive",
        },
        {
          id: "12",
          img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          username: "kaka1",
          fullName: "Luiz KaKa",
          email: "kaka@gmail.com",
          phoneNumber: "0789456012",
          createDate : "22/2/2022",
          bookingCount : 0,
          status: "InActive",
        },
      ],
    },
    getters: {
      membersList: (state) => {
        return state.membersList;
      },
      paginate: (state) => (currentPage) => {
        let size = 5;
        let startIndex = (currentPage - 1) * size;
        let endIndex = currentPage * size;
  
        let paginated_arr = state.membersList.slice(startIndex, endIndex);
        return paginated_arr;
      },
      membersTotal: (state) => {
        return state.membersList.length;
      },
      searchMembers: (state) => (searchValue,currentPage) => {
        let search_arr = state.membersList.filter((member) => {
          return (
            member.username.includes(searchValue) ||
            member.fullName.includes(searchValue) ||
            member.email.includes(searchValue) ||
            member.phoneNumber.includes(searchValue) ||
            member.createDate.includes(searchValue) ||
            member.status.includes(searchValue)
          );
        });
  
        let paginated_arr = [];
  
       
        if(search_arr.length > 5) {
          let size = 5;
          let startIndex = (currentPage - 1) * size;
          let endIndex = currentPage * size;
          paginated_arr = search_arr.slice(startIndex, endIndex);
    
        }else {
          paginated_arr = search_arr;
        }
  
      
  
        let search_obj = {
          search_arr : paginated_arr,
          totalSearch : search_arr.length,
        }
        return search_obj;
      },
    },
  };
  