import { NextResponse } from "next/server";


export async function POST(req,res){
  const body=await req.json();
  let url=body.url;
  console.log(url)
        const myres = await fetch(`https://10downloader.com/download?v=${url}&lang=en&type=video`, {
          credentials: 'include',
                  mode: 'no-cors',
                  method: "GET",
                  headers: {
                    Accept: "*/*",
                    "Content-Type": "text/html",
                    "ACCESS-CONTROL-ALLOW-ORIGIN": "*" ,
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    "Origin":"https://10downloader.com",
                    "Referer":"https://10downloader.com/"
          }
        });
        const response = (await myres.text()).toString();
        console.log(response);
          
      return NextResponse.json({"status":200,response:response});

}
