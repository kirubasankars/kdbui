<template>
  <div id="app">
    <TopNav />    
    <Controller />
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue'
import Controller from '@/components/Controller.vue'

export default {
  name: 'App',
  components: {
    TopNav,
    Controller
  }
}
</script>

<style lang="scss">

@import './assets/bootstrap-reboot.css';

html, body, #app {
    width: 100%;    
    height: 100%;
    position: relative;
    color: black;
    
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app {    

    button {
        box-shadow: none;
        background: none;
        border: 0;
        outline: 0;
    }

    button.btn-primary {
        background-color: #0275d8;
        color: white;
        font-weight: 400%;
        border-radius: 4px;
        padding: 2px 10px;
        font-size: 16px;
    }

    button.btn-primary:hover {
        background-color: #054e8d;        
    }

    button.btn-success {
        background-color: #5cb85c;
        color: white;
        font-weight: 400%;
        border-radius: 4px;
        padding: 2px 10px;
        font-size: 16px;
    }

    button.btn-success:hover {
        background-color: #5cb85c;        
    }

    button.btn-danger {
        background-color: #d9534f;
        color: white;
        font-weight: 400%;
        border-radius: 4px;
        padding: 2px 10px;
        font-size: 16px;
    }

    button.btn-danger:hover {
        background-color: #df1a13;        
    }

    > .top-nav {
        height: 46px;
        width: 100%;
        background-color: black;

        > .menu {            
            text-decoration: none;
            color: inherit;
            height: 46px;     
            line-height: 46px;
            padding: 0 12px 0 16px;
            display: inline-block; 
            display: none;           
        }

        > .title {                        
            font-size: 1.5rem;
            font-weight: 500;

            line-height: 46px;            
            text-decoration: none;
            padding: 0 12px 0 16px;
            color: white;            
            user-select: none;
        }

    }

    > .loading.visible {        
        display: inline;
    }
        
    > .loading {        
        position: absolute;
        top: 0;
        right: calc(50% - 20px);
        background-color: red;
        display: none;
        font-size: 0.88rem;
        line-height: 20px;
        padding: 0 10px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        user-select: none;
    }

    > .controller {
        width: 100%;
        height: calc(100% - 46px);                
    }

    > .controller {

        > .toolbox {            
            width: 100%;
            display: flex;           
            flex-direction: column;

            > div {
                height: 40px;
                width: 100%;                                                
                display: flex;
                flex-direction: row;                
            }

            > div:first-child {                
                height: 50px;                
            }

            .left_bar {
                padding: 0 12px 0 16px;
                order: 0;
                flex: 2;

                .action {
                    display: inline-block;
                    margin-right: 10px;
                }
            }

            .center_bar {
                padding: 0 12px 0 16px;
                order: 1;                
            }

            .right_bar {
                padding: 0 12px 0 16px;
                order: 2;               
                flex: 2;
            }
        }

        > .view {
            height: calc(100% - 90px);
            width: 100%;                    
            border-top: #b3b3b3 solid 2px;
            background-color: #f3f3f3;

            > .list {                
                width: 100%;
                overflow: hidden;
                color: black;                

                .header {                    
                    line-height: 35px;                    
                    font-weight: bold;                    
                    border-bottom: #b3b3b3 solid 1px;
                    user-select: none;
                    background-color: white;
                }

                .item {                                        
                    border-bottom: #b3b3b3 solid 1px;
                    line-height: 28px;                                        

                    input[type=checkbox] {                                                                        
                        vertical-align: middle;                                                                        
                    }
                    background-color: white;
                }

                tr.header > th:first-child, tr.item > td:first-child {
                    padding: 0 12px 0 16px;
                    width: 30px;
                }

                tr {
                    cursor: pointer;
                }

                tr:nth-child(even) {background: #f3f3f3}
                
                .item:hover {
                    background-color: #e6e6e6;
                }
            }
        }
    }

}

</style>
