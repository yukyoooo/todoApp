import {List} from "@chakra-ui/react";
import {TodoItem} from "./todoItem";
import {TodoTitle} from "./todoTitle";

export const TodoList = ({
	todoList,
	toggleTodoListItemStatus,
	deleteTodoListItem,
	title,
	as,
	fontSize,
}) => {
	return (
		<>
			<TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
			<List w="full">
				{todoList.map((todo) => (
					<TodoItem
						todo={todo}
						key={todo.id}
						toggleTodoListItemStatus={toggleTodoListItemStatus}
						deleteTodoListItem={deleteTodoListItem}
					/>
				))}
			</List>
		</>
	)
}