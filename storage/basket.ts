import { iProducts } from "@/interfaces"

let arr: iProducts[] = []

export const deleteFromStorage = (index: number) => arr.splice(index, 1);

export default arr