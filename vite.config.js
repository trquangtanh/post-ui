const {resolve}=require('path');
const{defineConfig}=require('vite') ;
module.exports=defineConfig({
    build:{
        rollupOptions:{
            input:{
                main: resolve(__dirname,'index.html'),
                postdetail:resolve(__dirname,'post-detail.html'),
                addEditpost:resolve(__dirname,'add-edit-post.html')
            }
        }
    }
})
