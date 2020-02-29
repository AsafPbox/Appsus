export default {
    template: `
        <section>
            <div class="todo-box">
               <p>{{info.label}}</p>
                    <ul>
                        <li v-for="todo in info.todos">
                            {{todo.txt}}
                        </li>
                    </ul>
            </div>
        </section>
    `,
    props : ['info']
}