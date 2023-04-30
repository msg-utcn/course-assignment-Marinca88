import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {UsersRole} from "./users-role";

@Entity()
export class UsersModel{
  @PrimaryGeneratedColumn('uuid')
  id?:string;
  @Column({nullable:false})
  name:string;
  @Column({nullable:false})
  email:string;
  @Column({nullable:false,enum:UsersRole,type:"enum"})
  roles:UsersRole[];
  @Column({nullable:false})
  password:string;

  constructor(values: Partial<UsersModel>) {
    if (values) {
      this.id=values.id;
      this.name=values.name;
      this.roles=values.roles;
      this.email=values.email;
      this.password=values.password;
    }
  }
}
