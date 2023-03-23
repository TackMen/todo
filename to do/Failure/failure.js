// const TO_DO_APP = () => {
//     const stage = document.getElementById('stage');
//     const CLASS_NONE ='js-none';
//     const now = new Date();
//     const lStorage = localStorage;
//     const taskForm = document.getElementById('js-taskForm');

//     const utilFunc = {
//         emptyHtml(target) {
//             while (target.firstChild) {
//                 target.removeChild(target.firstChild);
//             }
//         },

//         addZeroPadding(Num, digit) {
//             let result = '';
//             for (let i = 1; i < digit; i += 1) {
//                 result += '0';
//             }
//             return (result + Num).slice(-digit);
//         },

//         escapeHtml(str) {
//             if (typeof str !== 'string') {
//                 return str;
//             }
//             return str.replace(/[&'`"<>]/g, (match) => ({
//                 '&': '&amp;',
//                 "'": '&#x27;',
//                 '`': '&#x60;',
//                 '"': '&quot;',
//                 '<': '&lt;',
//                 '>': '&gt;'
//             }[match]));
//         },

//         isBlank(str) {
//             if (/\S/.test(str)) {
//                 return false;
//             }
//             return true;
//         },

//         getCheckedRadioValue(elements) {
//             let result;
//             Array.prototype.slice.call(elements).some((item) => {
//                 if(item.checked) {
//                     result = item.value;
//                     return true;
//                 }
//                 return false;
//             });
//             return result;
//         }
//     };

//     const formattedToday = `${now.getFullYear()}-${utilfunc.addZerroPadding(now.getMonth() + 1,2)}-${utilFunc.addZeroPadding(now.getDate(),2)}`;

//     const model = {
//         dispatcher: document.createElement('div'),
//         ev: new Event('dataChange'),

//         _stateAll: [],

//         setItem(type,arg) {
//             switch (type) {
//                 case 'add':
//                     this._stateAll.push(arg);
//                     break;
//                 case 'changeStatus':
//                     this._stateAll[arg[0]].status = arg[1] ? 'complete' : 'open';
//                     break;
//                 case 'edit': {
//                     const targetElement = this._stateAll[arg[0]];
//                     targetElement.content = arg[1];
//                     targetElement.priority = parseInt(arg[2], 10);
//                     targetElement.limit = arg[3];
//                     break;
//                 }
//                 case 'all':
//                     this._stateAll = arg;
//                     break;
//                 default:
//                     throw Error('The value of the argument is invalid');
//                 }
//                 this.dispatcher.dispatchEvent(this.ev);
//             },
            
//         getItem(opt_index) {
//             if (opt_index >= 0 && opt_index < this._stateAll.length) {
//                 return this._stateAll[opt_index];
//             }
//             return this._stateAll;
//         },

//         sortItem(ary,order) {
//             this._stateAll.sort((a, b) => {
//                 if (!Array.isArray(ary)) {
//                     return 0;
//                 }
//                 let valueA = null;
//                 let valueB = null;

//                 for (let i  = 0, l = ary.length; i < l; i += 1) {
//                     if (!Object.prototype.hasOwnProperty.call(a, ary[i]) ||
//                         !Object.prototype.hasOwnProperty.call(b,ary[i])) {
//                         return 0;
//                     }
//                     valueA = (typeof a[ary[i]] === 'string') ? a[ary[i]].toUpperCase() : a[ary[i]];
//                     valueA = (typeof b[ary[i]] === 'string') ? b[ary[i]].toUpperCase() : b[ary[i]];

//                     if (ary[i] === 'limit') {
//                         valueA = !valueA ? `${formattedToday}-1` : valueA;
//                         valueB = !valueB ? `${formattedToday}-1` : valueB;
//                     }

//                     if (valueA < valueB) {
//                         if (!Array.isArray(order) || order[i] === 'asc') {
//                             return -1;
//                         }
//                     }
//                     return 1;
//                 } else if (valueA > valueB) {
//                     if (!Array.isArray(order) || order[i] === 'asc') {
                        
//                     }
//                 }
            
//             )
//         }
        
//     }
// }