// $(".btnn").click(function () 
// {
//   $(".navv").show(1000);
//   $(".ms-10").click(function () 
//   {
//     $(".navv").hide(1000)
//   })
// }
// )

  $(".btnn").click(function () 
  {
    // $(".navv").css("opicty", "0");
    // $(".navv").removeClass("opicty-0");
    if ($(".navv").width()==0) 
    {
      // $(".navv").removeClass("opacity-0");

        // $(".navv").css("opacity","1");
        $(".navv").animate({width :"400"},500); 
        $(".fs-11").css("display","block");
        $(".ms-10").css("display","block");
        // $(".btnn").css("margin-left","450px")
        $(".btnn").animate({"margin-left":"450px"},500)

    } 
    else 
    {
        closeNav();
        // $(".navv").addClass("opacity-0");

    }
    })
    function closeNav()
        {
        $(".navv").animate({width :"0"},500); 
        $(".fs-11").css("display","none");
        $(".ms-10").css("display","none");
        // $(".btnn").css("margin-left","50px")
        $(".btnn").animate({"margin-left":"40px"},500)


       }

    $(".ms-10").click(function () 
        {
          closeNav();
        });


     $(".navv a").click(function () {
          var x = $(this).attr("href");
          $("html,body").animate({scrollTop : $(x).offset().top},100);
      })
    // ----------



    $(".bg-danger-subtle").click(function(){
      $(this).next().slideToggle(1000)
      $(".bg-dark-subtle").not($(this).next()).slideUp(1000)
  }
)
// -------------------
// function timing() 
// {
//   let myfun = setInterval(function () {
//     let now = new Date().getTime();
//     let days = Math.floor(now / (1000 * 60 * 60 * 24));

//    console.log(days);
//   })
  
// }
// ------------
// function startTime()
// {
//   let countDownDate = new Date("Jun 25, 2023 23:59:59");
//   console.log(countDownDate.getSeconds());

//     x = setInterval(function () 
//     {
//         let mydate = new Date; 
//         let secmod =  countDownDate.getSeconds() -   mydate.getSeconds()   
//         console.log(secmod);
//         $(".sec").text(mydate.getSeconds())
//         $(".min").text(mydate.getMinutes())
//         $(".hour").text(mydate.getHours())
//         $(".day").text(mydate.getDay())

//     },500);
// }
    // function stopTime()
    // {
    //   clearInterval(x); 
    // }

$(function()
{
  let countDownDate = new Date("Jun 25, 2023 23:59:59");
    x = setInterval(function () 
    {
        let mydate = new Date;
        console.log(mydate.getSeconds()); 
        $(".sec").text(mydate.getSeconds())
        $(".min").text(mydate.getMinutes())
        $(".hour").text(mydate.getHours())
        $(".day").text(mydate.getDate())

    },1000);
})




    // $(".bg-danger-subtle").click(function () 
    // {
    //   $(this).next().slideToggle(1000)
    //   $(".bg-dark-subtle").not($(this).next().slideUp(1000))
    // })
  

//----------------
//    $(function () 
// {
//     let limit= 100;
//     $("textarea").keydown(function () {
//         let length = $(this).val().length;
//         let character = limit - length;
//         console.log(character)
//         if (character <= 0) 
//         {
//             $("#numm").text("your available character finished");
//         } 
//         else 
//         {
//             $("#numm").text(character);
//         }
//     })
// })
  let text = document.querySelector("#textt");
  let num = document.querySelector("#numm");
  let limt = 100;
 ( function ()
 {
   text.addEventListener("keydown",function () 
   {
     let length = text.value.length;
     let charc = Number(limt)-Number(length);
     console.log(charc);
     if (charc<=0) 
     {
        document.getElementById("numm").innerHTML = "max-num";
        // $("#numm").text("your available character finished")
     }
     else
     {
      document.getElementById("numm").innerHTML = charc;

      // $("#numm").text(charc);
     }
   })
 })()
       
       


// $(".navv li a").click(function () {
//   var x = $(this).attr("href");
//   $("html,body").animate({scrollTop : $(x).offset().top},1000);
// })

// $("h4").click(function () 
// {
//   $(".bg-dark-subtle").show(1000 )
// })


// let nav = document.querySelector(".btnn")
//  nav.addEventListener("click",function () 
//  {
//     if($(".navv").width=="400px") 
//     {
//       // $(".navv").width("0px")
//       console.log("shtaaaa")
//     }
//     else
//     {
//       console.log("m3lesh")
//     }
//  })