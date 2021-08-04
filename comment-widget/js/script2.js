let api = "https://flipkart-page-api.now.sh/";
let widget = []
const fetchData = () => {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        widget=data
        console.log(widget)
        console.log(widget.length)
        
      })
      .then(() => renderFlex());
  };

  fetchData()

  const renderFlex=()=>{
    const listDiv = document.getElementById("list1");
    let divs = "<div>";
      for(let index=0;index < widget.length;index++)
      {
          if(widget[index].slotType === "WIDGET")
          {
              listDiv.innerHTML=widget[index].assets["imageUrl"]
          }
          else{
              console.log("yuo")
          }

      }
      

  }