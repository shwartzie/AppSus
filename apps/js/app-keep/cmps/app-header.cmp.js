export default {
    template: `
        <header class="app-header">
            <div class="logo">
                <h3>keep</h3>
            </div>
            <h1>logo</h1>
            <input type="text" placeholder="search">
            <nav class="nav-bar">

                <router-link to="/">Home</router-link>|
                <router-link to="/book">books</router-link>|
                <router-link to="/about">About</router-link>|
                <router-link to="/mail">Mail</router-link>|
                <router-link to="/keep">keep</router-link>|

            </nav>
        </header>
    
    `,
}
