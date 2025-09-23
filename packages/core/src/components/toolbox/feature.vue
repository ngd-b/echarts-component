<script setup lang="tsx">
import { computed, ref, watch } from "vue";
import { FeatureOption, FeatureType } from "./type";
import { isUndefined, omitBy } from "lodash-es";
import { useFeature, useStyle, useEmphasis } from "@/hooks/index";

defineOptions({
  name: "Feature",
  inheritAttrs: false,
});

let options = ref<FeatureOption>({});

const featureCtx = useFeature();

useStyle({
  options: options,
  update,
});

useEmphasis({
  options,
  update,
});

const props = withDefaults(
  defineProps<FeatureOption & { prop: FeatureType }>(),
  {
    show: undefined,
    readOnly: undefined,
    yAxisIndex: undefined,
    xAxisIndex: undefined,
  }
);

const prop = computed(() => props.prop);
watch(
  () => props,
  () => {
    let { _prop, ...rest } = omitBy(props, isUndefined);

    options.value = {
      ...options.value,
      ...rest,
    };
    update(options.value);
  },
  { immediate: true, deep: true }
);

function update(data: FeatureOption) {
  featureCtx.updateFeature(prop.value, data);
}
</script>
<template>
  <slot></slot>
</template>
