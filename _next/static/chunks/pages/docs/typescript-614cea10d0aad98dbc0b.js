_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{DCZL:function(n,e,t){"use strict";t.r(e);var a=t("nKUr"),r=t("q1tI"),c=t("aPDg"),i=t("+ryr"),o=t("AYxD"),l=t("WYyR"),s=t("WFRO");e.default=function(){var n=Object(r.useState)(),e=n[0],t=n[1],d=Object(r.useState)(null),u=d[0],D=d[1],m=Object(r.useState)(null),p=m[0],k=m[1];return Object(a.jsx)(c.a,{children:Object(a.jsxs)("section",{className:"",children:[Object(a.jsx)("h1",{className:"text-3xl mb-6",children:"Typescript:"}),Object(a.jsx)("p",{className:"text-lg",children:"This package contains built-in TypeScript declarations."}),Object(a.jsxs)("p",{className:"text-lg",children:[Object(a.jsx)("strong",{children:"Day"}),", ",Object(a.jsx)("strong",{children:"Range"})," and"," ",Object(a.jsx)("strong",{children:"Multi"})," are the three types of value that you can initialize to your date picker based on the date picker type"," ",Object(a.jsx)("span",{className:"text-base",children:"( single, range, multi )"})," that you choose to use."]}),Object(a.jsx)("div",{className:"mt-10",children:Object(a.jsx)("div",{className:"mb-10 pb-4 border-b border-primary border-opacity-50 ",children:Object(a.jsxs)("div",{className:"block xl:flex ",children:[Object(a.jsx)("div",{className:"w-2/2 lg:w-3/4 xl:w-1/2 pr-10 mb-4 xl:mb-0",children:Object(a.jsx)(i.a,{className:"rounded",style:o.tomorrowNightEighties,language:"javascript",children:s.r})}),Object(a.jsxs)("div",{className:"w-2/2 lg:w-1/4 xl:w-1/2",children:[Object(a.jsx)(l.d,{onChange:t,placeholder:"select single day",inputClass:"mb-2"}),"value: ",Object(a.jsx)("pre",{children:JSON.stringify(e,null,2)}),Object(a.jsx)("br",{}),Object(a.jsx)(l.d,{onChange:D,type:"range",placeholder:"select range of days",inputClass:"mb-2"}),"value: ",Object(a.jsx)("pre",{children:JSON.stringify(u,null,2)}),Object(a.jsx)(l.d,{onChange:k,placeholder:"select multi days",type:"multi"}),"value: ",Object(a.jsx)("pre",{children:JSON.stringify(p,null,2)})]})]})})})]})})}},N0gX:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/typescript",function(){return t("DCZL")}])},WFRO:function(n,e,t){"use strict";t.d(e,"m",(function(){return a})),t.d(e,"n",(function(){return r})),t.d(e,"q",(function(){return c})),t.d(e,"o",(function(){return i})),t.d(e,"k",(function(){return o})),t.d(e,"l",(function(){return l})),t.d(e,"i",(function(){return s})),t.d(e,"j",(function(){return d})),t.d(e,"p",(function(){return u})),t.d(e,"g",(function(){return D})),t.d(e,"a",(function(){return m})),t.d(e,"h",(function(){return p})),t.d(e,"f",(function(){return k})),t.d(e,"s",(function(){return h})),t.d(e,"d",(function(){return f})),t.d(e,"e",(function(){return P})),t.d(e,"c",(function(){return g})),t.d(e,"b",(function(){return y})),t.d(e,"r",(function(){return x}));var a="\nimport DtPicker from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\n  const [date, setDate] = useState(null)\n  return (\n    <DtPicker\n      onChange={setDate}\n    />\n  )\n}\nexport default DatePicker\n",r="\nimport DtPicker from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\n  const defaultValue = { year: 2019, month: 3, day: 20 }\n  const [date, setDate] = useState(null)\n  return (\n    <DtPicker\n      onChange={setDate}\n      initValue={defaultValue}\n    />\n  )\n}\nexport default DatePicker\n",c="\nimport DtPicker from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\n  const [initValue,setInitValue] = useState({ year: 2010, month: 3, day: 22 })\n  const [date, setDate] = useState(null)\n  const updateInitValue = () => {\n    setInitValue({\n      year: 2020,\n      month: 12,\n      day: 25\n    })\n  }\n  return (\n    <button onClick={updateInitValue} >\n      Update init value\n    </button>\n    <DtPicker\n      onChange={setDate}\n      initValue={initValue}\n    />\n  )\n}\nexport default DatePicker\n",i="\nimport DtPicker from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\n  const [date, setDate] = useState(null)\n  return (\n    <DtPicker\n      onChange={setDate}\n      local=\"fa\"\n      showWeekend\n    />\n  )\n}\nexport default DatePicker\n",o="\nimport DtPicker from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\n  const [date, setDate] = useState(null)\n  return (\n    <DtPicker\n      onChange={setDate}\n      type='range'\n    />\n  )\n}\nexport default DatePicker\n",l="\nimport DtPicker from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\n  const defaultValue = {\n    from: { year: 2012, month: 5, day: 2 },\n    to: { year: 2012, month: 5, day: 23 }\n  }\n  const [date, setDate] = useState(null)\n  return (\n    <DtPicker\n      onChange={setDate}\n      initValue={defaultValue}\n      type='range'\n    />\n  )\n}\nexport default DatePicker\n",s="\nimport DtPicker from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\n  const [date, setDate] = useState(null)\n  return (\n    <DtPicker\n      onChange={setDate}\n      type='multi'\n    />\n  )\n}\nexport default DatePicker\n",d="\nimport DtPicker from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\n  const defaultValue = {[\n    {\n      year: 2012,\n      month: 5,\n      day: 29,\n      hours: 18,\n      minutes: 11\n    },\n    {\n      year: 2012,\n      month: 5,\n      day: 2,\n      hours: 18,\n      minutes: 11\n    },\n    {\n      year: 2012,\n      month: 6,\n      day: 3,\n      hours: 18,\n      minutes: 11\n    }\n  ]}\n  const [date, setDate] = useState(null)\n  return (\n    <DtPicker\n      onChange={setDate}\n      initValue={defaultValue}\n      type='multi'\n    />\n  )\n}\nexport default DatePicker\n",u="\nimport DtPicker from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\n  const [date, setDate] = useState(null)\n  return (\n    <DtPicker\n      onChange={setDate}\n      withTime\n    />\n  )\n}\nexport default DatePicker\n",D="\nimport DtPicker from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\n  const [date, setDate] = useState(null)\n  return (\n    <DtPicker\n      onChange={setDate}\n      showWeekend\n      clearBtn\n      todayBtn\n    />\n  )\n}\nexport default DatePicker\n",m="\nimport DtPicker from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\n  const [date, setDate] = useState(null)\n  const handleCalendarChange = (newDate: any) => {\n    console.log(newDate)\n    console.log('Calendar changed')\n  }\n  const handleCalendarClose = () => {\n    console.log('Calendar closed')\n  }\n  const handleCalendarOpen = () => {\n    console.log('Calendar opened')\n  }\n  return (\n    <DtPicker\n      onChange={setDate}\n      onCalenderChange={handleCalendarChange}\n      onCalenderShow={handleCalendarOpen}\n      onCalenderHide={handleCalendarClose}\n    />\n  )\n}\nexport default DatePicker\n",p="\nimport DtPicker from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\nconst maxDate = {\n    year: 2016,\n    month: 6,\n    day: 23\n  }\n  const minDate = {\n    year: 2012,\n    month: 5,\n    day: 2\n  }\n  const [date, setDate] = useState(null)\n  return (\n    <DtPicker\n      onChange={setDate}\n      minDate={minDate}\n      maxDate={maxDate}\n    />\n  )\n}\nexport default DatePicker\n",k="\nimport DtPicker from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\n  const [date, setDate] = useState(null)\n  const disabledDates = [\n    {\n      year: 2015,\n      month: 6,\n      day: 23\n    },\n    {\n      year: 2015,\n      month: 6,\n      day: 12\n    },\n    {\n      year: 2015,\n      month: 6,\n      day: 10\n    }\n  ]\n  return (\n    <DtPicker\n      onChange={setDate}\n      disabledDates={disabledDatesList}\n      minDate={minDate}\n      maxDate={maxDate}\n    />\n  )\n}\nexport default DatePicker\n",h="\nimport  { DtCalendar } from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\n  const [date, setDate] = useState(null)\n  return (\n    <DtCalendar\n      onChange={setDate}\n    />\n  )\n}\nexport default DatePicker\n",f="\nimport DtPicker from 'react-calendar-datetime-picker'\nconst DatePicker = () => {\n  const [date, setDate] = useState(null)\n  return (\n    <DtPicker\n      onChange={setDate}\n      NextBtnIcon={arrowRight}\n      PreviousBtnIcon={arrowLeft}\n      placeholder='select date'\n      fromLabel='From date'\n      toLabel='To date'\n      type='range'\n      inputClass='custom-input'\n      daysClass='custom-days'\n      headerClass='custom-header'\n    />\n  )\n}\nexport default DatePicker\n",P="\n.custom-input {\n  text-align: right;\n  color: #009a17;\n  height: 46px !important;\n  line-height: 46px !important;\n  &::placeholder {\n    color: #009a17;\n  }\n}\n.custom-days {\n  background-color: #c8daff;\n  .is-week-days {\n    color: #d20000;\n  }\n  .is-disabled {\n    color: #444;\n  }\n}\n.custom-header {\n  background-color: #538bff;\n}\n",g="\nimport DtPicker, {\n  convertToFa\n} from 'react-calendar-datetime-picker'\n\nconst DatePicker = () => {\n  const [date, setDate] = useState(null)\n  return (\n    <div>\n      <DtPicker\n        onChange={setDate}\n      />\n      <p>{convertToFa(date)}</p>\n    </div>\n  )\n}\nexport default DatePicker\n",y="\nimport DtPicker, {\n  convertToEn\n} from 'react-calendar-datetime-picker'\n\nconst DatePicker = () => {\n  const [date, setDate] = useState(null)\n  return (\n    <div>\n      <DtPicker\n        onChange={setDate}\n        withTime\n        local=\"fa\"\n      />\n      <p>{convertToEn(date,'-')}</p>\n    </div>\n  )\n}\nexport default DatePicker\n",x="\nimport DtPicker, { Day, Range, Multi  } from 'react-calendar-datetime-picker'\n\nconst DatePicker = () => {\n  const [date, setDate] = useState<Day>(null)\n  const [dateRange, setDateRange] = useState<Range>(null)\n  const [dateMulti, setDateMulti] = useState<Multi>(null)\n\n  return (\n    <div>\n      <DtPicker\n        onChange={setDate}\n        type=\"single\"\n        placeholder='select single day'\n      />\n      <DtPicker\n        onChange={setDateRange}\n        type=\"range\"\n        placeholder='select range of days'\n      />\n      <DtPicker\n        onChange={setDateMulti}\n        type='multi'\n        placeholder='select multi days'\n      />\n    </div>\n  )\n}\nexport default DatePicker\n"}},[["N0gX",0,2,1,3,5,4]]]);