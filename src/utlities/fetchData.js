
export const excersiceOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':'b1a70ce2c8msh4d59b832c583ec0p1d348ajsn84a6fc823911',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
    method: 'GET',
    
   
    headers: {
      'X-RapidAPI-Key': 'b1a70ce2c8msh4d59b832c583ec0p1d348ajsn84a6fc823911',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  


export const fetchData=async(url,options)=>{
  
    const response=await fetch(url,options)
    const body=await response.json()
    return body;
}


