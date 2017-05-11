declare module 'deprecated' {
  export function method <T extends Function>(msg: string, log: (...t: any[]) => void ,t: T): T
  export function field <T, V>(msg: string, log: (...t: any[]) => void , t: T, prop: string, value: V): T
}