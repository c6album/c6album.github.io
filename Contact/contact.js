angular.module("contactList", [])
  // .filter("favorites", function() {
  //   return function(favorites){
  //     switch (favorites) {
  //       case "":
  //         $scope.nameList[$index].favorite = "favorite";
  //         break;
  //       case "favorite":
  //         $scope.nameList[$index].favorite = "";
  //         break;
  //     }
  //   }
  // })
  .controller("nameAdderController", function($scope) {

    //set temp initial values for testing
    $scope.nameBox = "George";
    $scope.emailBox = "george@example.com";
    //

    var nameList = [{
      name: "Ánh",
      favorite: "",
      phone: "0346712985",
      email: "None"
    }, {
      name: "Châu",
      favorite: "",
      phone: "0395393896",
      email: "None"
    }, {
      name: "Chinh",
      favorite: "",
      phone: "0338593410",
      email: "None"
    }, {
      name: "Chương",
      favorite: "",
      phone: "0392314474",
      email: "None"
    }, {
      name: "Cường",
      favorite: "",
      phone: "0386690087",
      email: "None"
    }, {
      name: "Diệu",
      favorite: "",
      phone: "0326320925",
      email: "None"
    }, {
      name: "Duy",
      favorite: "",
      phone: "0358283107",
      email: "None"
    }, {
      name: "Duyên",
      favorite: "",
      phone: "0855813172",
      email: "None"
    }, {
      name: "Đạt",
      favorite: "",
      phone: "0383933063",
      email: "None"
    }, {
      name: "Điệp",
      favorite: "",
      phone: "0982149974",
      email: "None"
    }, {
      name: "Hải",
      favorite: "",
      phone: "0342601002",
      email: "Dreamken6603@gmail.com"
    }, {
      name: "Hiếu",
      favorite: "",
      phone: "0336995833",
      email: "None"
    }, {
      name: "Huy",
      favorite: "",
      phone: "0398943124",
      email: "None"
    }, {
      name: "Hương",
      favorite: "",
      phone: "0344793101",
      email: "None"
    }, {
      name: "Khoa",
      favorite: "",
      phone: "0914930159",
      email: "nguyentrananhkhoa.dmxtk@gmail.com"
    }, {
      name: "Lệ",
      favorite: "",
      phone: "0335742774",
      email: "None"
    }, {
      name: "Ly",
      favorite: "",
      phone: "0347550903",
      email: "None"
    }, {
      name: "My",
      favorite: "",
      phone: "0386011380",
      email: "None"
    }, {
      name: "Na",
      favorite: "",
      phone: "0342228730",
      email: "None"
    }, {
      name: "Nga",
      favorite: "",
      phone: "0384400138",
      email: "None"
    }, {
      name: "Ngọc",
      favorite: "",
      phone: "0358366962",
      email: "None"
    }, {
      name: "Nguyên",
      favorite: "",
      phone: "0359134317",
      email: "None"
    }, {
      name: "Nhân",
      favorite: "",
      phone: "0911315649",
      email: "None"
    }, {
      name: "ý Nhi",
      favorite: "",
      phone: "0869610433",
      email: "None"
    }, {
      name: "Thị Nhi",     // i miss u :( | anytime, anywhere i really miss u :(
      favorite: "",
      phone: "0377244314",
      email: "nguyenthinhi2012rita@gmail.com"
    }, {
      name: "Phúc",
      favorite: "",
      phone: "0338210629",
      email: "None"
    }, {
      name: "Phương",
      favorite: "",
      phone: "0933679947",
      email: "None"
    }, {
      name: "Quyên",
      favorite: "",
      phone: "0377708331",
      email: "None"
    }, {
      name: "Tài",
      favorite: "",
      phone: "0359031704",
      email: "None"
    }, {
      name: "Tâm",
      favorite: "",
      phone: "0397727165",
      email: "None"
    }, {
      name: "Thắm",
      favorite: "",
      phone: "0852748350",
      email: "None"
    }, {
      name: "Thi",
      favorite: "",
      phone: "0805876550",
      email: "None"
    }, {
      name: "Thoa",
      favorite: "",
      phone: "0352864064",
      email: "None"
    }, {
      name: "Thương",
      favorite: "",
      phone: "0376617457",
      email: "None"
    }, {
      name: "Tiên",   // I'm pretty disappointed in you
      favorite: "",
      phone: "0867944787",
      email: "None"
    }, {
      name: "Tin",
      favorite: "",
      phone: "0862440064",
      email: "None"
    },{
      name: "Trâm",
      favorite: "",
      phone: "0397338127",
      email: "None"
    }, {
      name: "Tuấn",
      favorite: "",
      phone: "0339363842",
      email: "None"
    }, {
      name: "Vi",
      favorite: "",
      phone: "0977376504",
      email: "None"
    }, {
      name: "Vũ",
      favorite: "",
      phone: "0328074840",
      email: "None"
     } ];      // vai lon ngoi di nhan xin gmail ma het me cai thanh xuan

     // chan vl, ranh roi lam 1 cai cho may ban sau nay co the xem lai ma deo ai chiu hop tac, tuk

     // neu ma ai doc duoc dong nay thi chuc ban cang ngay cang thanh cong trong cong viec nho, iu <3

     //                                                             ---from Ca with love---

     // tien day share vai template cho may ban nao sau hoc cntt cua lop minh nho :3

     // codepen.io

     //source: https://github.com/c6album/c6album.github.io

    $scope.nameList = nameList;  // create name list

    $scope.favName = function($index) {
      switch ($scope.nameList[$index].favorite) {
        case "":
          $scope.nameList[$index].favorite = "favorite";
          break;
        case "favorite":
          $scope.nameList[$index].favorite = "";
          break;
      }  

      console.log($scope.nameList[$index].favorite);
    }    // dk cua name list

    $scope.editing = false;
  
    $scope.openEdit = function($index) {
      if (!$scope.editing) {
        //edit contact is open
        $scope.editing = true;
        $scope.contactName = $scope.nameList[$index].name;
        $scope.nameBox = $scope.nameList[$index].name;
        $scope.emailBox = $scope.nameList[$index].email;
        $scope.phoneBox = $scope.nameList[$index].phone;
        $scope.favBox = $scope.nameList[$index].favorite;
        if($scope.favBox == "favorite"){
          $scope.favBox = true;
        }else{
          $scope.favBox = false;
        }
      } else {
        $scope.editing = false;
        $scope.emailBox = "";
        $scope.nameBox = "";
        $scope.phoneBox = "";
      }
      $scope.editContact = function(){
          
          /*future functionality: 
          -reference current item in editor by unique user ID # instead of $index 
          (ie. open editor for "John" aka (userId:82341, $index:5), 
          check for changes to index position of John before splicing and pushing)
            -var userID = $scope.nameList[$index].userID
            -loop through all userIds in nameList.userId for matching userID
            -if index = userID then edit that index
          */
        
          console.log($scope.nameList[$index]);
          $scope.nameList.splice($index, 1);
          $scope.addContact();
          $scope.editing = false;
        }
    }     // edit sdt (da bo)

    $scope.nameSorter = function() {
      var byName = $scope.nameList.slice(0)
      byName.sort(function(a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x > y ? 1 : x < y ? 1 : 0; //sort
      });
      $scope.nameList = byName;
    }
    
    //sort onload
    $scope.nameSorter();
  
    $scope.addContact = function() {
      //since email isn't required...
      $scope.emailBox = $scope.emailBox || $scope.nameBox + "@website.com";
      $scope.phoneBox = $scope.phoneBox || "123-456-7891";
      
      if($scope.favBox){
        $scope.favBox = "favorite";
      }else{
        $scope.favBox = "";
      }

      $scope.nameList.push({
        name: $scope.nameBox,
        favorite: $scope.favBox,
        phone: $scope.phoneBox,
        email: $scope.emailBox
      });

      $scope.nameSorter();

      $scope.emailBox = "";
      $scope.nameBox = "";
      $scope.phoneBox = "";
    }
var scott;
    $scope.removeName = function($index) {
      var curName = $scope.nameList[$index].name;
      $scope.nameList.splice($index, 1);
      console.log(curName + " removed");
    }

    $scope.deleteAll = function() {
      $scope.nameList = [];
    }

    $scope.favSort = false;

    $scope.favToggle = function() {
      if ($scope.favSort) {
        $scope.favSort = false;
      } else {
        $scope.favSort = true;
      }
      console.log($scope.favSort);
    }

    $scope.filterFavs = function(obj) {
      //console.log(obj.name, obj.favorite);
      if ($scope.favSort) {
        if (obj.favorite === "favorite") {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }

    }
  });