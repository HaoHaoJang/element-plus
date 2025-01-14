import { computed } from 'vue'
import buildModifiers from './build-modifiers'

import type { Ref } from 'vue'
import type { Options, Placement } from '@popperjs/core'

interface IUsePopperProps {
  popperOptions: Options
  arrowOffset: number
  offset: number
  placement: Placement
}

interface IUsePopperState {
  arrow: Ref<HTMLElement>
}

export default function usePopperOptions(props: IUsePopperProps, state: IUsePopperState) {
  return computed(() => {
    return {
      placement: props.placement,
      modifiers: buildModifiers({
        arrow: state.arrow.value,
        arrowOffset: props.arrowOffset,
        offset: props.offset,
      }, props.popperOptions?.modifiers),
      ...props.popperOptions,
    }
  })
}
