
function App() {
  return <div style={{backgroundColor:"#dfe6e9",height:"100vh"}}>
    <div style={{display:"flex",justifyContent:"center"}}>
      <div>
      <div>
        <PostComponent/>
        <br />
      </div>
      <div>
        <PostComponent/>
        <br />
      </div>
      <div>
        <PostComponent/>
        <br />
      </div>
      <div>
        <PostComponent/>
        <br />
      </div>
      </div>
  
    </div>
 
  </div>
}

function PostComponent(){
  return<div style={{width:400, backgroundColor:"white", borderRadius:10,
borderColor:"grey",borderWidth:1}}>
  <div style={{display:"flex"}}>
  <img src={"https://docs.python.org/3/_static/py.svg"} style={{
    width:20,
    height:20,
    borderRadius:20
  }}/>

  
  <div style={{fontSize:10,marginLeft:10}}>
    <b>Aayush Chitransh</b>
    <div>Manager @ Apple</div>
    <div>29m</div>
  </div>
  
  </div >
  <div style={{fontSize:12}}>Earm money in 20 days?</div>
</div>
}



export default App
