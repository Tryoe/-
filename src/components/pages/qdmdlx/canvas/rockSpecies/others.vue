<template>
  <div style="display: flex; height: 80%; flex-direction: column;border:1px solid;">
    <div style="margin-left:20%;display: flex;flex-direction: row;">
      <div class="icon_file_upload">
        <label class="upload-button">
          上传岩样照片智能识别
          <input type="file" accept=".jpg, .jpeg, .png, .gif, .tiff" @change="handleFileUpload">
        </label>
      </div>
      <div>
          <div class="file_area">
              <div class="rockspecies-thumbnail">
              <img class="rockspecies-thumbnail-image"  v-if="previewUrl" :src="previewUrl" alt="Preview"  >
          </div>
          <input  style="border:1px solid rgb(180,180,194)"  class="text-box" v-model="uploadedFilePath" :readonly="true" placeholder="图片类型支持PNG、JPG、JPEG、BMP，大小不超过4M">
          </div>
      </div>
    </div>
    <div style="margin-left:20%;margin-top: 5px;">
      <span  style="font-size: 18px;width: 400px;">
        <strong>您判定的岩石种类：</strong>
      </span>
        <br>
        <div class="proovr-collect__tags" style="display: flex;width: 81%; align-items: center;">
          <el-input v-model="type" style=" height: 40px;"></el-input>
        </div>

    </div>
    <!-- <div style="width: 100%;">
      <h2>This is an Others Page</h2>
    </div>
    <br /> -->
    <!-- <div style="margin-top: 2%; width: 70%; height: 70%; border: 1px solid #000;">
      <div class="upload_area">
        <div class="icon_file_upload">
          <label class="upload-button">
            上传岩样照片智能识别
            <input type="file" accept=".jpg, .jpeg, .png, .gif, .tiff" @change="handleFileUpload" />
          </label>
        </div>
        <div class="input_visual">
          <div class="file_area">
            <div class="rockspecies-thumbnail">
              <img
                class="rockspecies-thumbnail-image"
                v-if="previewUrl"
                :src="previewUrl"
                alt="Preview"
              />
            </div>
            <input
              style="border: 1px solid rgba(248,248,255,0.5)"
              class="text-box"
              v-model="uploadedFilePath"
              :readonly="true"
              placeholder="图片类型支持PNG、JPG、JPEG、BMP，大小不超过4M"
            />
          </div>
        </div>
      </div>
      <div style="width: auto; margin-top: 5px;">
        <span style="font-size: 18px; width: 400px; margin-left: 60px;">
          <strong>您判定的岩石种类：</strong>
        </span>
        <br />
        <div
          class="proovr-collect__tags"
          style="display: flex; width: 1200px; align-items: center; margin-left: 59px; padding-bottom: 15px; margin-top: 5px;"
        >
          <el-input
            v-model="type"
            style="width: 1169px; margin-right: 10px;"
            placeholder="请输入岩石种类"
          ></el-input>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import bus from '@/utils/bus.js'

export default {
  name: "Others",
  data() {
    return {
      previewUrl: null, // 用来存放预览图像的URL
      uploadedFilePath: "", // 上传的文件路径
      type: "花岗岩" // 用户判定的岩石种类
    };
  },
  created(){
    bus.on('type-updated',(data)=>{
      this.type= data.type;
    })
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.uploadedFilePath = file.name;
        const reader = new FileReader();
        reader.onload = () => {
          this.previewUrl = reader.result; // 设置预览图
        };
        reader.readAsDataURL(file);
      }
    }
  }
};
</script>

<style scoped>
.upload_area {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon_file_upload {
  margin-top: 200px;
}


.proovr-collect__tags {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.upload-button {
  width: 160px;
  height: 40px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}

.upload-button input[type="file"] {
  display: none;
}
.file_area{
  margin-top:8px ;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.rockspecies-thumbnail{
  display: inline-block;
  margin-left: 40px;
}
.rockspecies-thumbnail-image
{
  height: 40px;
  width: 40px;
  border: none;
}
.text-box {
  width: 500px;
  height: 40px;
  margin-left: 5px;
  padding-left: 5px;
  border: none;
  margin-top: 192px;
  box-sizing: border-box;
}
</style>
