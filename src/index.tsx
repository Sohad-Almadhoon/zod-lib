import { z } from "zod";
// const UserSchema = z.object({
//   username: z.string().min(3 , "Username must be more than 3 chars"),
//   age: z.number().gt(0),
//   birthday: z.date(),
//   isProgrammer: z.literal(true),
//   hobby: z.enum(["Programming", "Weight Lifting", "Guitar"]).optional(),
// }).omit({ age: true }).passthrough();
// // merge for merging object
// // pick is to pick attribute
// // passthrough passed through the object & strict is the viceversa
// type User = z.infer<typeof UserSchema>;
// const user: User = {
//   username: "Sohad",
// //   age: 21,
//   birthday: new Date(),
//   isProgrammer: true,
//     hobby: "Programming",
//   name:"soso",
// };

// console.log(UserSchema.parse(user));

// const UserSchema = z.object({
//   id: z.string().or(z.number()), // id: z.union([z.string(), z.number()])
//   username: z.string().min(3),
//   friends: z.array(z.string()).nonempty(),
//   coords: z.tuple([z.string(), z.date()]).rest(z.number()),
// });
// type User = z.infer<typeof UserSchema>;

// const user: User = {
//   // id: 6,
//   id: "gyig",
//   username: "Sohad",
//   friends: ["Bisan", "Manar"],
//   coords: ["Hi", new Date(), 5, 6.5],
// };
// console.log(UserSchema.parse(user));

// const UserMap = z.record(z.string());
// const user = {
//   id: "1",
//   username: "sohad",
// };
// console.log(UserMap.parse(user));

// const UserMap = z.map(z.string(), z.object({ name: z.string() }));
// const user = new Map([
//   ["bisan_id", { name: "Bisan" }],
//   ["sohad_id", { name: "Sohad" }],
// ]);
// console.log(UserMap.parse(user));

const brandEmail = z
  .string()
  .email()
  .refine((val) => val.endsWith("@sohad.com"), {
    message: "Email must end with @sohad.com",
  });
console.log(brandEmail.parse("soso@soso.com"));


