

<div id="rules">
	<div id="topbar">
  <svg height=16px viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14 8v1H3V8h11z"/></svg>
  
  <svg height=16px viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"/></svg>
  
  <svg height=16px viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"/></svg>
  
	</div>
	<div id="content">
	  <pre>$ npm run dev</pre>
	</div>
	
  </div>

  <style>

pre {
	margin: 0;
}

#rules {
  overflow:hidden;
  height: 400px;
  aspect-ratio:16/10;
  border-radius: 6%/10%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  display:flex;
  flex-direction:column;
  border: 1px solid rgba(255, 255, 255, 0.3);

  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
}

#topbar {
  flex:1;
  background-color:rgb(44, 44, 44, 0.8);
  display:flex;
  justify-content: flex-end;
  align-items: center;
  padding-right:6%;
  gap:8%;
}

#content {
  flex:4;
  
  background: rgba(var(--compl2), 0.6);

  
        
  

  padding:5%;
  color:rgb(204, 204, 204);
  font-size:45px;
}

#topbar > svg {
  color:white;
  height:40%;
}
</style>
