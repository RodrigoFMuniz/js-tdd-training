import {sum, sub, mult, div} from  "./main.js"

describe("Calc",()=>{
  describe("Smoke tests",()=>{

    // it("Should exists the calc lib",()=>{
    //   expect(sum).toBeDefined()
    // })
    it("Should exists the method sum",()=>{
      expect(sum).toBeDefined()
      expect(sum).toBeInstanceOf(Function)
    })
    it("Should exists the method sub",()=>{
      expect(sub).toBeDefined()
      expect(sub).toBeInstanceOf(Function)
    })
    it("Should exists the method mult",()=>{
      expect(mult).toBeDefined()
      expect(mult).toBeInstanceOf(Function)
    })
    it("Should exists the method div",()=>{
      expect(div).toBeDefined()
      expect(div).toBeInstanceOf(Function)
    })
  })

  describe("Sum", ()=>{
    it("Should return 4 when sum 2 and 2",()=>{
      expect(sum(2,2)).toBe(4)
    })
  })

  describe("Sub",()=>{
    it("Should return 12 when take 4 from 16",()=>{
      expect(sub(16,4)).toBe(12)
    })
  })

  describe("Mult", ()=>{
    it("Should return 9 when multiply 3 and 3",()=>{
      expect(mult(3,3)).toBe(9)
    })
  }),
  describe("Div", ()=>{
    it("Should return 4 when dividing 16 by 4",()=>{
      expect(div(16,4)).toBe(4)
    })

    it("Should return 0 when dividing by 0",()=>{
      expect(div(10,0)).toBe(0)
    })
    it("Should return 0 when second argument isn't a Number instance",()=>{
      expect(div(10,"t")).toBe(0)
    })
  })
})