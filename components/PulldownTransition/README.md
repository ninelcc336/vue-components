# PulldownTransition

```vue
<template>
  <PulldownTransition>
    <div class="list"></div>
  </PulldownTransition>
</template>
<script>
import { PullDownTransition } from "pull_down_transition";
export default {
  components: { PullDownTransition },
};
</script>
<style>
.list {
  /* 需要为PulldownTransition组件的子组件设置过渡属性 */
  transition: 0.4s;
}
</style>
```
