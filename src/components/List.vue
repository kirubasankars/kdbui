<template>
  <table class="list">
    <thead>
      <tr class="header">
        <th>
          <input type="checkbox" />
        </th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr class="item">
        <td>
          <input type="checkbox" class="chksel" />
        </td>
        <td>a</td>
      </tr>
      <tr class="item">
        <td>
          <input type="checkbox" class="chksel" />
        </td>
        <td>b</td>
      </tr>
      <tr class="item">
        <td>
          <input type="checkbox" class="chksel" />
        </td>
        <td>c</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: "ListView",
  created() {
    console.log(this.$route.params)
  }
};

</script>
