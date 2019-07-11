<template>
       <Form ref="formInline" :model="formInline" :rules="ruleInline" block>
        <FormItem prop="username">
            <Input type="text" v-model="formInline.username" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
</template>

<script>
import axios from 'axios';
import {
    Form,
    FormItem,
    Input,
    Icon
} from 'iview'
export default {
    components:{
          Form,
    FormItem,
    Input,
    Icon
    },
 data () {
            return {
                formInline: {
                    username: '',
                    password: ''
                },
                ruleInline: {
                    username: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        const url='/login'
                        const opt={
                            username:this.formInline.username,
                            password:this.formInline.password
                        }
                        axios.get('/login',{
                            params:opt
                        }).then(res =>{
                            this.$Message.success('Success!');
                            console.log(res.data.token.time)
                            if(res.data.code===1){
                                 sessionStorage.setItem("token",res.data.token.time)
                            this.$router.history.push('/mine')
                            }
                           
                        }).catch(error=>{
                            this.$$Message.error("服务器拒绝了你的请求")
                        })
                        
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
}
</script>

<style>

</style>
