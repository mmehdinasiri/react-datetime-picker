import * as React from 'react'
import './style/main.scss'
import { DtWrapper } from './Components'
import CalenderProvider from './store/CalenderProvider'
import ViewProvider from './store/ViewProvider'
import SelectedDaysProvider from './store/SelectedDaysProvider'
import SelectedTimeProvider from './store/SelectedTimeProvider'
import { handelInitialValues } from './Helpers'

export const DtPicker = ({
  defaultValue,
  onChange,
  type,
  withTime,
  local
}: IDtPickerProps) => {
  const correctedType = type || 'single'
  const correctedLocal = local ? local.toLocaleLowerCase() : 'en'

  const { initCalender, initTime } = handelInitialValues(
    defaultValue,
    correctedType,
    correctedLocal
  )
  return (
    <ViewProvider>
      <CalenderProvider initCalender={initCalender} type={correctedType}>
        <SelectedDaysProvider initState={defaultValue} type={correctedType}>
          <SelectedTimeProvider initState={initTime} type={correctedType}>
            <DtWrapper
              onChange={onChange}
              type={correctedType}
              withTime={withTime}
              local={correctedLocal}
              hasDefaultVal={!!defaultValue}
            />
          </SelectedTimeProvider>
        </SelectedDaysProvider>
      </CalenderProvider>
    </ViewProvider>
  )
}
