export function scoreAsset(asset:any){
 let score=0;
 if(asset.width>600) score+=3;
 if(asset.type==='jpg'||asset.type==='png') score+=3;
 if(asset.alt?.match(/coffee|drink|truck|store|person/i)) score+=4;
 return score;
}
