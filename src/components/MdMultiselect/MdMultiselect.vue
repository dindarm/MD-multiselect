<template>
  <div class=" mdmultiselect_main">
    <div class="mdmultiselect_input_row d-flex ">
      <div class="form-control d-flex align-items-center" tabindex="0" @click="inputFocused" @blur="inputBlurred"
        @keyup.up.stop.prevent="upKeyPressed" @keyup.down.stop="downKeyPressed" @keyup.enter.stop="enterKeyPressed"
        @keyup="keyPressed">

        <input class="border-0 w-100" v-if="searchable" />

        <slot name="singleLabel" :value="single" v-else>
          {{single}}
        </slot>
        <div class="flex-grow-1"></div>
        <img class="openArrow" :class="{opened: listContainerVisible}" src="@/assets/darro1.svg" />
      </div>

    </div>

    <div class="mdmultiselect_list_dropdown">
      <div class="mdultiselect_list_container" v-if="listContainerVisible">
        <div class="optionRow" :class="[optionSelectedClassName(item)]" v-for="(item, index) in options"
          :key="'mdmselop' + index" @mousedown="optionClicked(item)" @mouseover="onMouseOver(item)">
          <slot name="option" :option="item">
            {{item}} - default
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,
  ref,
  watch } from 'vue'

export default defineComponent({
  name: 'MdMultiselect',

  props: {
    options: {
      type: Array,
      default: () => []
    },
    single: {
      type: Object,
      default: () => {
        return {
        }
      }
    },
    trackBy: {
      type: String,
      default: ''
    },
    searchable: {
      type: Boolean,
      default: false
    }
  },

  setup (options, { emit }) {
    const listContainerVisible = ref(false)

    const inputFocused = () => {
      listContainerVisible.value = true
    }

    const inputBlurred = () => {
      listContainerVisible.value = false
    }

    const optionClicked = (item: string) => {
      emit('update:single', item)
    }

    const upKeyPressed = () => {
      console.log('upKeyPressed')
    }

    const downKeyPressed = () => {
      console.log('downKeyPressed')
    }

    const enterKeyPressed = () => {
      console.log('enterKeyPressed')
    }

    // eslint-disable-next-line
      const onMouseOver = (item: any) => {

    }
    // eslint-disable-next-line
      const isOptionSelected = (item: any) => {
      if (options.trackBy === '') {
        return false
      }
      return item[options.trackBy] === options.single[options.trackBy]
    }

    const optionSelectedClassName = (item: any) => {
      return isOptionSelected(item) ? 'bg-primary text-white' : ''
    }

    const keyPressed = (e: KeyboardEvent) => {
      console.log('keyPressed')
      console.log(e)
    }

    watch(() => options.single, () => {
      listContainerVisible.value = false
    })

    return {
      listContainerVisible,
      inputFocused,
      inputBlurred,
      optionClicked,
      isOptionSelected,
      upKeyPressed,
      downKeyPressed,
      enterKeyPressed,
      keyPressed,
      onMouseOver,
      optionSelectedClassName
    }
  }
})

</script>

<style lang="scss" scoped>
  .mdmultiselect_main {

    z-index: 0;

    .mdmultiselect_input_row {
      position: relative;
    }

    .mdmultiselect_list_dropdown {
      position: relative;

      .mdultiselect_list_container {
        position: absolute;
        top: 0px;
        height: 0px;
        width: 100%;
        height: 200px;
        border: 1px solid #CFD4D9;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: white;
        z-index: 100;

        .optionRow {
          cursor: pointer;

          &:hover {
            background-color: #CFD4D9;
          }

          &.selectedOption {
            background-color: yellowgreen;
          }
        }

        &::-webkit-scrollbar {
          width: 1px;
        }

        &::-webkit-scrollbar-track {
          background: rgb(255, 255, 255);
        }

        &::-webkit-scrollbar-thumb {
          background: rgb(171, 171, 171);
        }

      }
    }

    .openArrow {
      width: 15px;
      height: 15px;
      transition: all 0.2s;

      &.opened {
        transform: rotate(180deg);
      }
    }

  }

</style>
