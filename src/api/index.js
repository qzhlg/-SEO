function _initData(){
   return $axios.get("/getshopdata")
}
export {
    _initData
}