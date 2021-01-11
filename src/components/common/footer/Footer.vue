<template>
  <div class="footer">
    <div class="footer-link">
      <ul>
        <li>
          <i class="el-icon-link"></i>
          <a href="">链接</a>
        </li>
        <li>
          <i class="el-icon-link"></i>
          <a href="">链接</a>
        </li>
        <li>
          <i class="el-icon-link"></i>
          <a href="">链接</a>
        </li>
      <li><p>备案号：</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
 name:'Footer',

}
</script>

<style  scoped>
  .footer {
    display: flex;
    position: relative;
    width: 100%;
    bottom: 0;
    justify-content: center;
    left: 0;
    background-color: #171616;
    height: 180px;
    margin-top: 60px;
    color: #fff;
  }

  .footer-link {
    margin: 0 30px;
  }
  .footer-link ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0 15px;
  }
  .footer-link ul li {
    margin: 7px 0;
  }
  .footer-link ul li a {
    color: #fff;

  }
</style ul e>