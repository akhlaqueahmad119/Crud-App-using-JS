let firstInfor = document.getElementById("firstInfor")
let form = document.getElementById("form")

let name1 = document.getElementById("name1").value
let emailid = document.getElementById("emailid").value
 let body1 = document.getElementById("body1").value
 let submitt = document.getElementById("submitt")
 let save= document.getElementById("save")
  let editpost= document.getElementById("edit-post")


 

 let inputs = document.querySelectorAll('#name1, #emailid, #body1')





 
    
    //   post

    
        form.addEventListener("submit",function(event){
          event.preventDefault();
            // if(name1 === '') alert('Enter Name')
            // else if(emailid === '') alert('Enter emailid')
            // else if(body1 === '') alert('Enter quote')
         if(inputs[0].value === "" || inputs[1].value=== "" || inputs[2].value=== ""){
            alert("fill all the box")
            
         }else{
         event.preventDefault() //auto submission
            //   stop()
    
            fetch("http://localhost:3002/user",{
                method : "POST",
               
                body:JSON.stringify({
                    name:inputs[0].value,
                    email:inputs[1].value,
                    body:inputs[2].value
                }),
                headers:{
                    'Content-Type': 'application/json;charset = UTF-8'
                       
                 }
                
            })
            .then(response => response.json()).then((data) =>{
                    
                 // console.log(data.name)
                    firstInfor.innerHTML  += `<div class="showdata" >
                     <div class = "nam">${data.name}</div>
                    <div class="emailid" >${data.email}</div>
                    <div class="username" >${data.body} </div>
                     <div class="btn">
                      <button class="btn1">Edit</button>
                       <button class="btn2">Delete</button>
                   
                    </div>
                     </div>`
                
            })
           
            inputs.forEach(input => {
                input.value = ''
           })
          
          }
        
         })
         

    


 

    //get
      function getData(){
        
      fetch("http://localhost:3002/user")
      .then(response => response.json())
      .then((data)=>{
        //   let newdata = data.splice(0, 10)
      //  console.log(data)
        
        let getdata = "";
        data.map((ele)=>{
    
            // console.log( ele.id)
            getdata += `<div class="showdata" id = "kk2">
            <div class = "nam" id = "kk" >${ele.name}</div>
            <div class="emailid" >${ele.email}</div>
            <div class="username" >${ele.body}</div>
             <div class="btn" data-id = ${ele.id}>
                 <button class="btn1" id = "edit-post" >Edit</button>
                 <button class="btn2" onclick = "deleteData(${ele.id})">Delete</button>
             
              </div>
              </div>`
             
        })
    
         firstInfor.innerHTML = getdata
      })
  //     inputs.forEach(input => {
  //       input.value = ''
  //  })
      }
       getData()

      //PUT 

      firstInfor.addEventListener("click",(e)=>{
        e.preventDefault()
        
         let editbuttonpressed = e.target.id == "edit-post"
         //console.log(editbuttonpressed)
         let id2 =( e.target.parentElement.dataset.id)
         
         
      if(editbuttonpressed){
        console.log(id2)
      
      save.style.display = "flex"  
         //editpost.style.display = "block"
    submitt.style.display = "none"
      
       let parent = e.target.parentElement.parentElement;
        //  console.log(parent)
        let name2 = parent.querySelector('.nam').textContent;
        let emailid2 = parent.querySelector('.emailid').innerHTML;
        let quote2 = parent.querySelector('.username').innerHTML;
        //  console.log(name2)
        //  console.log(emailid2)
        //  console.log(quote2)
        // name1.value = name2
        // emailid.value = emailid2
        // body1.value = quote2
        
       
        inputs[0].value = name2
        inputs[1].value = emailid2
        inputs[2].value = quote2

        

    //     //   console.log(id2)
      
       //update the existing post
       
     save.addEventListener("click",(e)=>{
          e.preventDefault()
          stop()
        // console.log(inputs[0].value)
        // console.log(id2)
    
         
         let url = `http://localhost:3002/user/${id2}`;
          
       fetch(url,{
            method:"PUT",
            body :JSON.stringify({
                name:inputs[0].value ,
                email:inputs[1].value ,
                 body:inputs[2].value 
            }),
            headers:{
                'Content-Type': 'application/json;charset = UTF-8'
                   
             }
       }).then(res => res.json()).then((data =>{
            console.log(data)
       }))
     })
     }
      
      })
    
   //DELETE
    function deleteData(data){
    
        let deletevalue  = confirm("Do you want to delete ?");
        if(deletevalue){
          
            let url = `http://localhost:3002/user/${data}`;
            fetch(url,{
                method:"DELETE"
            })
         
            
        }
    }

   
    // function edituser(event){
     
    //  alert(event)
    //  let name1 = document.getElementById("name1").value
    //  let emailid = document.getElementById("emailid").value
    //  let body1 = document.getElementById("body1").value
      
    //   // let name2 = document.querySelector('.nam').textContent;
    //   // let emailid2 = document.querySelector('.emailid').innerHTML;
    //   //  let quote2 = document.querySelector('.username').innerHTML;
            
    //   //   inputs[0].value = name2
    //   //   inputs[1].value = emailid2
    //   //  inputs[2].value = quote2
    
    //   // editpost.style.display = "block"
    //   // submitt.style.display = "none"

    //   save.addEventListener("click",(e)=>{
    //       e.preventDefault();
    //       stop()
                
    //      console.log(event)
    //      let url = `http://localhost:3002/user/${event}`;
    //     //  console.log(url)
    //    fetch(url,{
    //         method:"PUT",
    //         body :JSON.stringify({
    //           name:inputs[0].value ,
    //          email:inputs[1].value ,
    //           body:inputs[2].value 
    //         }),
    //         headers:{
    //             'Content-Type': 'application/json;charset = UTF-8'
                   
    //          }
    //    }).then(res => res.json()).then((data =>{
    //      //   console.log(data)
    //    }))
     
          
          
          
            
          
    //   })
    // }
   
  
    
     
   
   
//   post
//   function postData(){
//    form.addEventListener("submit", function(e){
//       e.preventDefault();  //Auto Submission
//       // fetch post request
//       fetch("https://jsonplaceholder.typicode.com/comments",{
//           method:'POST',
//           body: JSON.stringify({
//               name:name1,
//               email:emailid,
//               body:body1
//           }),
//           headers:{
//               'Content-Type': 'application/json;charset = UTF-8'
   
//           }
//       }).then(response => response.json()).then( (data)=>{
//          console.log(data)
//           firstInfor.innerHTML  += `<div class="showdata" >
//           <div class = "nam">Name:${data.name}</div>
//           <div class="emailid" >Email:${data.email}</div>
//           <div class="username" >Quote:${data.body}</div>
//            <div class="btn">
//                <button class="btn1">Edit</button>
//                <button class="btn2">Delete</button>
           
//             </div>
//             </div>`
            
           
//             // data.id += 1;
            

            
//             // data.name1 ="";
         
//             // data.emailid="";
//             // data.body1="" ;
            
//       })
   
      
//    })
// }
// postData()
 

//     //get
//      function getData(){
//       fetch("https://jsonplaceholder.typicode.com/comments")
//       .then(response => response.json())
//       .then((data)=>{
//           let newdata = data.splice(0, 10)
//         console.log(newdata)
//         let getdata = "";
//         newdata.map((ele)=>{
    
//             //console.log( ele.id)
//             getdata += `<div class="showdata" >
//             <div class = "nam" >Name:${ele.name}</div>
//             <div class="emailid" >Email:${ele.email}</div>
//             <div class="username" >Quote:${ele.body}</div>
//              <div class="btn">
//                  <button class="btn1">Edit</button>
//                  <button class="btn2">Delete</button>
             
//               </div>
//               </div>`
             
//         })
    
//          firstInfor.innerHTML = getdata
//       })
//     }
//      getData()
   
   





