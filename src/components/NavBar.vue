<template>
  <nav>
    <ul class="nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
ul.nav {
  margin: 0;
  padding: 0;
  list-style: none;
  height: 36px;
  line-height: 36px;
  background: #0d7963; /* you can change the backgorund color here. */
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  margin-bottom: 1em;
}
ul.nav li {
  border-right: 1px solid #189b80; /* you can change the border color matching to your background color */
  float: left;
}
ul.nav a {
  display: block;
  padding: 0 28px;
  color: #ccece6;
  text-decoration: none;
}
ul.nav a:hover,
ul.nav li.current a {
  background: #086754;
}
</style>
