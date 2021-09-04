"use strict";
Component({
    options: {
        addGlobalClass: true,
    },
    properties: {},
    data: {
        headPos: 0,
        colCount: 5,
    },
    methods: {
        selectHead: function (e) {
            console.log(e);
            this.setData({
                headPos: e.currentTarget.dataset.headPos
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS10cmlhbmdsZS1wb2ludGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGluZS10cmlhbmdsZS1wb2ludGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFDUixPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsSUFBSTtLQUNyQjtJQUlELFVBQVUsRUFBRSxFQUVYO0lBS0QsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLENBQUM7UUFDVixRQUFRLEVBQUUsQ0FBQztLQUNaO0lBS0QsT0FBTyxFQUFFO1FBQ1AsVUFBVSxFQUFWLFVBQVcsQ0FBTTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLE9BQU8sRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPO2FBQ3pDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHt7Y29tcG9uZW50fX0udHNcbkNvbXBvbmVudCh7XG4gIG9wdGlvbnM6IHtcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZSxcbiAgfSxcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGhlYWRQb3M6IDAsXG4gICAgY29sQ291bnQ6IDUsXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIHNlbGVjdEhlYWQoZTogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaGVhZFBvczogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaGVhZFBvc1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG4iXX0=