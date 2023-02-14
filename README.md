# IconMaster

## install

```bash
npm i icon-master@latest
```

## select icons

https://icon-master.com/

## vue

```js
<script setup lang='ts'>
import { IconMasterVue } from 'icon-master'
// import { IconMaster } from 'icon-master/dist/vue'
</script>
<template>
    <div>
        ...
        <IconMaster colorRef="ff0000" nameRef="After-the-rain" />
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
      <IconMaster color='ff0000' iconName='After-the-rain' />
      ...
    </div>
  )
}
```
