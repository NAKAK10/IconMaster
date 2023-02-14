![media](https://raw.githubusercontent.com/NAKAK10/IconMaster/main/media/img.jpeg)

## install

```bash
npm i icon-master@latest
```

## select icons & documentation

https://icon-master.com/

- [React](https://icon-master.com/developer/react)
- [Vue](https://icon-master.com/developer/vue)

## vue

```js
<script setup lang='ts'>
import { IconMasterVue } from 'icon-master'
// import { IconMaster } from 'icon-master/dist/vue'
</script>
<template>
    <div>
        ...
        <IconMaster color="ff0000" name="After-the-rain" />
        ...
    </div>
</template>
```

## react

```js
import { IconMasterReact } from 'icon-master'
// import { IconMaster } from 'icon-master/dist/react'

export default () => {
  return (
    <div>
      ...
      <IconMaster color='ff0000' name='After-the-rain' />
      ...
    </div>
  )
}
```
