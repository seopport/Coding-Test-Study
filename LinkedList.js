class LinkedList { // 10개가 있다고 했을 때, 6번째 인덱스에 있는 노드를 갖고 오고 싶어요
    constructor(value) {
        this.head = new Node(value); // head 에 시작하는 Node 를 연결합니다.
        this.nodeCount = 1; //노드 길이 체크
    }

    // LinkedList 가장 끝에 있는 노드에 새로운 노드를 연결합니다.
    append(value) {
        let curr = this.head;
        while (curr.next !== null) { // curr의 다음이 끝에 갈 때까지 이동합니다. //curr이 null이라는 것은 꼬리칸이라는얘기
            curr = curr.next;
        }
        curr.next = new Node(value);
        this.nodeCount++;
    }

    // 10개가 있다고 했을 때, index번째 인덱스에 있는 노드를 갖고 오고 싶어요
    getNode(index) {
        // 엄밀히 말을 하자면 이 인덱스가 전체 크기를 벗어나는지를 검사해야 됩니다.
        // this.nodeCount를 근거로 index가 유효한지를 판단해야 됩니다.
        // 하지만, 우선은 유효한 index라고 가정을 하겠습니다.

        let node = this.head; // 링크드리스트의 Head를 처음 노드로 지정합니다!
        for (let i = 0; i < index; i++) {
            node = node.next; // 원하는 위치에 당도할 때 까지 다음 노드로 이동!
        }
        return node;
    }

    addNode(index, value) {
        original_node = this.getNode(index); //index번째 노드까지 이동한 노드
        original_node.next = new Node(value); //index번째 까지 이동한 노드 다음에 new노드 추가
        this.nodeCount++;
    }
}


